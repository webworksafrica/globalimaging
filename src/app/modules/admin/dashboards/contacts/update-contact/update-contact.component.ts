import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'app/models/contacts.models';
import { ContactsService } from 'app/services/contacts.service';
import { ProductsService } from 'app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'app/models/product.models';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})


export class UpdateContactComponent implements OnInit {


  formFieldHelpers: string[] = [''];
  formContact: FormGroup;
  contacts: Contact[] = [];
  products: Product[] = [];
  loading: boolean = false;
  router: any;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
  mobile: string;
  Contact: string;



  constructor(
     private _matDialog: MatDialog,
     private contactService: ContactsService,
     private productService: ProductsService,
     private fb: FormBuilder,
     private toastr: ToastrService) {

   }

   ngOnInit(): void {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log();
    this.street = 'street';
    this.city ='city';
    this.state ='state';
    this.zip = 'zip';
    this.country ='country';
    this.phone ='phone';
    this.mobile ='mobile';

    this.formContact = this.fb.group({
      id: [''],
      Street: [localStorage.getItem('street')? localStorage.getItem('street'):'', Validators.required],
      City: [localStorage.getItem('city')? localStorage.getItem('city'):'', Validators.required],
      State: [localStorage.getItem('state')? localStorage.getItem('state'):'', Validators.required],
      PostalCode:[localStorage.getItem('zip')? localStorage.getItem('zip'):'', Validators.required],
      Country: [localStorage.getItem('country')? localStorage.getItem('country'):'', Validators.required],
      OfficePhone: [localStorage.getItem('phone')? localStorage.getItem('phone'):'', Validators.required],
      Mobile: [localStorage.getItem('mobile')? localStorage.getItem('mobile'):'', Validators.required],
      Email: [user.username, Validators.required],


    });
  }

  onSubmit(data) {
    console.log(data);

    // debugger;
    const newContact = new Contact();
    newContact.MailingStreet = data.MailingStreet;
    newContact.MailingCity = data.MailingCity;
    newContact.MailingState = data.MailingState;
    newContact.MailingPostalCode = data.MailingPostalCode;
    newContact.MailingCountry = data.MailingCountry;
    newContact.Phone = data.Phone;
    newContact.MobilePhone = data.MobilePhone;



    // this.loading = true;
    this.contactService.saveContact(newContact).subscribe(
      (x: any) => {
        console.log("success");
        console.log(x);
        // this.loading = false;
        debugger
        this.formContact.reset();
        this.toastr.success('Contact updated successfully!', 'Updated Contact!');
        this.formContact.reset();

        window.location.reload();
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
