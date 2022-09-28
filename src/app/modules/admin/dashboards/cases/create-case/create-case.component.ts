import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Case } from 'app/models/cases.models';
import { Product } from 'app/models/product.models';
import { CasesService } from 'app/services/cases.service';
import { ProductsService } from 'app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ToastContainerDirective } from 'ngx-toastr';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { Contact } from 'app/models/contacts.models';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.scss']
})
export class CreateCaseComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  formCase: FormGroup;
  cases: Case[] = [];
  products: Product[] = [];
  loading: boolean = false;
  router: any;
  productid: any;
  Buyer_in_Contacts__c: any;
  Related_SKU__c: string;
  Contact: string;



  constructor(
     private _matDialog: MatDialog,
     private caseService: CasesService,
     private productService: ProductsService,
     private fb: FormBuilder,
     private toastr: ToastrService) {


   }

  ngOnInit(): void {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(e);
    this.productid = 'testing';
    this.Buyer_in_Contacts__c ='contact name';

    this.formCase = this.fb.group({
      id: [''],
      Subject: ['', Validators.required],
      Description: ['', Validators.required],
      Product: [localStorage.getItem('productid')? localStorage.getItem('productid'):'', Validators.required],
      Contact: [localStorage.getItem('contactid')? localStorage.getItem('contactid'):'', Validators.required],
      Issue_type__c: ['General inquiry'],
      SuppliedEmail: [user.username, Validators.required],




    });
  }

  onSubmit(data) {
    console.log(data);
    const user = JSON.parse(localStorage.getItem('currentUser'));

    // debugger;
    const newCase = new Case();
    newCase.Subject = data.Subject;
    newCase.Description = data.Description;
    newCase.Related_SKU__c = data.Product;
    newCase.Handler_in_Contacts__c = '0035d00006omJpjAAE';
    newCase.Issue_type__c = data.Issue_type__c;
    newCase.SuppliedEmail = user.username;
    newCase.ContactId = data.Contact;




    // this.loading = true;
    this.caseService.saveCase(newCase).subscribe(
      (x: any) => {
        console.log('success');
        console.log(x);
        // this.loading = false;

       //debugger;
        this.formCase.reset();
        this.toastr.success('Support ticket submitted successfully!');

        this.formCase.reset();
        this._matDialog.closeAll();

        //window.location.reload();
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  saveAndClose(): void
    {
      this._matDialog.closeAll();
    }


}
