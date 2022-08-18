import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/product.models';
import { CreateCaseComponent } from '../cases/create-case/create-case.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { CasesService } from 'app/services/cases.service';
import { Case } from 'app/models/cases.models';
import { CaseDetailComponent } from '../cases/case-detail/case-detail.component';

@Component({
    selector       : 'project',
    templateUrl    : './project.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit, OnDestroy
{
    chartGithubIssues: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    selectedProject: string = 'Global Imaging';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    products: Product[] = [];
    cases: Case[] = [];
    username: string;
    productCount: number;
    casesCount: number;
    isLoading: boolean;
    /**
     * Constructor
     */
    constructor(
        private _projectService: ProjectService,
        private productService: ProductsService,
        private casesService: CasesService,
        private _router: Router,
        private _matDialog: MatDialog,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.username = user.username;
        this.getProducts();
        this.getCases();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getCases() {
        this.casesService.getCasesByEmail().subscribe((x: Case[]) => {
            console.log(x["records"]);
            this.cases = x["records"];
            this.casesCount = this.cases.length;
        });
    }

    getProducts() {
        this.isLoading = true
        this.productService.getProductsByEmail().subscribe((x: Product[]) => {
            // console.log(x["records"]);
            this.products = x["records"];
            this.productCount = this.products.length;
this.isLoading = false;
        });
    }

    openProductDetailsDialog(product: any): void
    {
        // Open the dialog
        console.log(product);

        const dialogRef = this._matDialog.open(ProductDetailsComponent);

        dialogRef.componentInstance.product = product;

        dialogRef.afterClosed()
                 .subscribe((result) => {
                     console.log('Compose dialog was closed!');
                 });
    }

    openCaseDetailsDialog(case_: any): void
    {
        // Open the dialog
        console.log(case_);

        const dialogRef = this._matDialog.open(CaseDetailComponent);

        dialogRef.componentInstance.case_ = case_;

        dialogRef.afterClosed()
                 .subscribe((result) => {
                     console.log('Compose dialog was closed!');
                 });
    }

    openCreateCaseDialog(): void
    {
        // Open the dialog
        const dialogRef = this._matDialog.open(CreateCaseComponent);

        dialogRef.afterClosed()
                 .subscribe((result) => {
                     console.log('Compose dialog was closed!');
                 });
    }






}
