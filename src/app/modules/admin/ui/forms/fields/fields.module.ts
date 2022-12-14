import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { FuseHighlightModule } from '@gi/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';
import { CreateCaseComponent } from 'app/modules/admin/dashboards/cases/create-case/create-case.component';
import { UpdateContactComponent } from 'app/modules/admin/dashboards/contacts/update-contact/update-contact.component';
import { ProductDetailsComponent } from 'app/modules/admin/dashboards/products/product-details/product-details.component';
import { CaseDetailComponent } from 'app/modules/admin/dashboards/cases/case-detail/case-detail.component';

export const routes: Route[] = [
    {
        path     : '',
        component: FormsFieldsComponent
    }
];

@NgModule({
    declarations: [
        FormsFieldsComponent,
        CreateCaseComponent,
        UpdateContactComponent,
        ProductDetailsComponent,
        CaseDetailComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        FuseHighlightModule,
        SharedModule
    ]
})
export class FormsFieldsModule
{
}
