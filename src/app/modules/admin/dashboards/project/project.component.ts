/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
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
import { MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { Equipment } from 'app/models/equipment.models';
import { Coordinator } from 'app/models/coordinator.models';
import { CoordinatorsService } from 'app/services/coordinator.service';
import { DocumentsComponent } from '../documents/document-details/documents.component';
import { DocumentsService } from 'app/services/documents.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { stringify } from 'crypto-js/enc-base64';

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
    documentsservice: DocumentsService;
    products: Product[] = [];
    productCount: number;
    contentversions: ContentVersion[] = [];
    contentversionsCount: number;
    cases: Case[] = [];
    casesCount: number;
    username: string;
    userid: string;
    contact: Contact [] = [];
    name: any;
    customerid: any;
    street: any;
    city: any;
    state: any;
    zip: any;
    country: any;
    phone: any;
    mobile: any;
    equipments: Equipment[] = [];
    documents: Document[] = [];
    title = 'angular-material-tab-router';
    activeLinkIndex = -1;
    tab: any;






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
        private documentService: DocumentsService,
        private documentService2: DocumentsService,
        private documentService3: DocumentsService,
        private contactsService: ContactsService,
        private casesService: CasesService,
        private _router: Router,
        private _matDialog: MatDialog,

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
        const customerid =localStorage.getItem('customerid');
        const contentversion = localStorage.getItem('contentversion');
        this.username = user.username;
        this.userid = user.userid;
        this.getProducts();
        this.getCases();
        this.getContentVersions();
        this.getContacts();
        this.name = fullname;
        this.customerid =customerid;



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
                                        if (
                                            key1 ===
                                            'Site_Prep_Document_Link__c'
                                        ) {
                                            entry[
                                                'Equipment_Site_Prep_Document'
                                            ] = value1;
                                        }
                                        if (
                                            key1 ===
                                            'Technical_Install_Document_Link__c'
                                        ) {
                                            entry[
                                                'Equipment_Technical_Install_Document'
                                            ] = value1;
                                        }
                                        if (key1 === 'User_Manual_Link__c') {
                                            entry['Equipment_User_Manual'] =
                                                value1;
                                        }
                                        if (key1 === 'Buyer_in_Contacts__c') {
                                            entry['Buyer_in_Contacts'] =
                                                value1;
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
        this.contactsService.getContactsByEmail().subscribe((x: Contact[]) => {
            //console.log('name',x['records'][0]?.Name);
            this.contact = x['records'];
            localStorage.setItem('name', x['records'][0]?.Name);
            localStorage.setItem('street', x['records'][0]?.MailingStreet);
            localStorage.setItem('city', x['records'][0]?.MailingCity);
            localStorage.setItem('state', x['records'][0]?.MailingState);
            localStorage.setItem('zip', x['records'][0]?.MailingPostalCode);
            localStorage.setItem('country', x['records'][0]?.MailingCountry);
            localStorage.setItem('phone', x['records'][0]?.Phone);
            localStorage.setItem('mobile', x['records'][0]?.MobilePhone);
            localStorage.setItem('customerid', x['records'][0]?.Id);

            this.isLoading = false;
        });
    }

    openProductDetailsDialog(product: any): void {
        // Open the dialog
        //console.log('string', product?.Buyer_Full_Name__c);
        console.log('product owner', product?.Buyer_in_Contacts__c);

        const dialogRef = this._matDialog.open(ProductDetailsComponent);

        dialogRef.componentInstance.product = product;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Device Details dialog was closed!');
        });
    }

    openDocumentsDialog(product: any): void {
        // Open the dialog
        //console.log('string', product?.owner);

        const dialogRef = this._matDialog.open(DocumentsComponent);

        dialogRef.componentInstance.product = product;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Documents dialog was closed!');
        });
    }

    openContactDetailsDialog(contact: any): void {
        // Open the dialog
        console.log('name', contact?.Name);

        const dialogRef = this._matDialog.open(ContactDetailsComponent);

        dialogRef.componentInstance.contact = contact;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Contact Details dialog was closed!');
        });
    }



    openCaseDetailsDialog(case_: any): void {
        // Open the dialog
        console.log(case_);

        const dialogRef = this._matDialog.open(CaseDetailComponent);

        dialogRef.componentInstance.case_ = case_;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Case details dialog was closed!');
        });
    }

    openCreateCaseDialog(e): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(CreateCaseComponent);
        console.log('productid', e.Id);
        console.log('contactid', e.Buyer_in_Contacts__c);
        localStorage.setItem('productid', e.Id);
        localStorage.setItem('contactid', e.Buyer_in_Contacts__c);
        dialogRef.afterClosed().subscribe((result) => {
            console.log('Create Case dialog was closed!');
        });
    }

    openUpdateContactDialog(this: any): void {
        // Open the dialog
        const dialogRef = this._matDialog.open(UpdateContactComponent);


        dialogRef.afterClosed().subscribe((result) => {
            console.log('Contact Update Was Closed!');
        });
    }

    openContentVersionDetailsDialog(contentversion: any): void {
        // Open the dialog
        console.log(contentversion);

        const dialogRef = this._matDialog.open(ContentVersionDetailsComponent);

        dialogRef.componentInstance.contentversion = contentversion;

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Documents dialog was closed!');
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    moveToSelectedTab(tabName: string) {
        for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText === tabName) {
              // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
              (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
            }
          }
      }


      tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
        console.log('tabChangeEvent => ', tabChangeEvent);
        console.log('index => ', tabChangeEvent.index);
        localStorage.setItem('tab', this.title );
    };

    activeTab = (currentTab: MatTabsModule): void => {
        console.log('tabChangeEvent => ', currentTab);
        console.log('index => ', currentTab);
        localStorage.setItem('tab', this.title );
    };

}
