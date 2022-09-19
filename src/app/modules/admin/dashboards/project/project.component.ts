import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { ProductsService } from 'app/services/products.service';
import { EquipmentsService } from 'app/services/equipment.service';
import { Product } from 'app/models/product.models';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { UpdateContactComponent } from '../contacts/update-contact/update-contact.component';
import { CreateCaseComponent } from '../cases/create-case/create-case.component';
import { MatDialog } from '@angular/material/dialog';
import { CasesService } from 'app/services/cases.service';
import { Case } from 'app/models/cases.models';
import { CaseDetailComponent } from '../cases/case-detail/case-detail.component';
import { ContactsService } from 'app/services/contacts.service';
import { Contact } from 'app/models/contacts.models';
import { ContactDetailsComponent } from '../contacts/contact-details/contact-details.component';
import { ContentVersionsService } from 'app/services/contentversions.service';
import { ContentVersion } from 'app/models/contentversion.models';
import { ContentVersionDetailsComponent } from '../contentversions/contentversion-details/contentversion-details.component';
import { MatTabGroup } from '@angular/material/tabs';
import { Equipment } from 'app/models/equipment.models';
import { Coordinator } from 'app/models/coordinator.models';
import { CoordinatorsService } from 'app/services/coordinator.service';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit, OnDestroy {
    chartGithubIssues: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    selectedProject: string = 'Global Imaging';
    contentversionsservice: ContentVersionsService;

    products: Product[] = [];
    productCount: number;
    contentversions: ContentVersion[] = [];
    contentversionsCount: number;
    cases: Case[] = [];
    casesCount: number;
    username: string;
    userid: string;
    contact: Contact['Name'];
    name: string;
    contacts: Contact[] = [];
    equipments: Equipment[] = [];





    isLoading: boolean;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _projectService: ProjectService,
        private contentversionsService: ContentVersionsService,
        private productService: ProductsService,
        private equipmentService: EquipmentsService,
        private coordinatorService: CoordinatorsService,
        private contactService: ContactsService,
        private casesService: CasesService,
        private _router: Router,
        private _matDialog: MatDialog
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const userid = JSON.parse(localStorage.getItem('currentUserID'));
        const fullname = localStorage.getItem('name');
        const contentversion = localStorage.getItem('contentversion');
        this.username = user.username;
        this.userid = user.userid;
        this.getProducts();
        this.getCases();
        this.getContentVersions();
        this.getContacts();
        this.name = fullname;
    }
    reloadCurrentPage() {
        window.location.reload();
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getCases() {
        this.casesService.getCasesByEmail().subscribe((x: Case[]) => {
            // console.log(x['records']);
            this.cases = x['records'];
            this.casesCount = this.cases.length;
        });
    }

    getProducts() {
        this.isLoading = true;
        this.productService.getProductsByEmail().subscribe((x: Product[]) => {
            this.products = x['records'];
            Object.values(this.products).forEach((entry) => {
                Object.entries(entry).forEach((entry1) => {
                    const [key, value] = entry1;
                    if (key === 'Equipment__c') {
                        if (value != null) {
                            this.equipmentService
                                .getEquipmentById(value)
                                .subscribe((y: Equipment[]) => {
                                    const equipmentVar = y['records'];
                                    for (const [key1, value1] of Object.entries(
                                        equipmentVar[0]
                                    )) {
                                        if (key1 === 'Name') {
                                            entry['Equipment_Name'] = value1;
                                        }
                                    }
                                });
                        }
                    }
                    if (key === 'Coordinator_in_contacts__c') {
                        if (value != null) {
                            this.coordinatorService
                                .getCoordinatorById(value)
                                .subscribe((y: Coordinator[]) => {
                                    const coordinator = y['records'];
                                    for (const [key1, value1] of Object.entries(
                                        coordinator[0]
                                    )) {
                                        if (key1 === 'Name') {
                                            entry['Coordinator_Name'] = value1;
                                        }
                                        if (key1 === 'Email') {
                                            entry['Coordinator_Email'] = value1;
                                        }
                                        if (key1 === 'Phone') {
                                            entry['Coordinator_phone'] = value1;
                                        }
                                    }
                                });
                        }
                    }
                });
            });
            this.productCount = this.products.length;
            this.isLoading = false;
        });
    }

    getContentVersions() {
        this.isLoading = true;
        this.contentversionsService
            .getContentVersionsByEmail()
            .subscribe((x: ContentVersion[]) => {
                console.log(x['records']);
                this.contentversions = x['records'];
                this.contentversionsCount = this.contentversions.length;
                this.isLoading = false;
            });
    }

    getContacts() {
        this.isLoading = true;
        this.contactService.getContactsByEmail().subscribe((x: Contact[]) => {
            //console.log("name",x['records'][0]?.Name);
            this.contacts = x['records'];
            localStorage.setItem('name', x['records'][0]?.Name);
            this.isLoading = false;
        });
    }

    openProductDetailsDialog(product: any): void {
        // Open the dialog
        console.log('string', product?.Buyer_Full_Name__c);

        const dialogRef = this._matDialog.open(ProductDetailsComponent);

        dialogRef.componentInstance.product = product;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    openContactDetailsDialog(contact: any): void {
        // Open the dialog
        console.log('string', contact?.Name);

        const dialogRef = this._matDialog.open(ContactDetailsComponent);

        dialogRef.componentInstance.contact = contact;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    openCaseDetailsDialog(case_: any): void {
        // Open the dialog
        console.log(case_);

        const dialogRef = this._matDialog.open(CaseDetailComponent);

        dialogRef.componentInstance.case_ = case_;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    openCreateCaseDialog(e): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(CreateCaseComponent);
        console.log('casebutton', e.Id);
        localStorage.setItem('caseid', e.Id);
        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    openUpdateContactDialog(): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(UpdateContactComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    openContentVersionDetailsDialog(contentversion: any): void {
        // Open the dialog
        console.log(contentversion);

        const dialogRef = this._matDialog.open(ContentVersionDetailsComponent);

        dialogRef.componentInstance.contentversion = contentversion;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    moveToSelectedTab(tabName: string) {
        for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
              // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
              (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
            }
          }
      }

}
