/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
    styleUrls: ['./update-contact.component.scss'],
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
    contact: string;
    name: string;


    constructor(
        private _matDialog: MatDialog,
        private contactsService: ContactsService,
        private productService: ProductsService,
        private fb: FormBuilder,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        console.log();
        this.street = 'street';
        this.city = 'city';
        this.state = 'state';
        this.zip = 'zip';
        this.country = 'country';
        this.phone = 'phone';
        this.mobile = 'mobile';
        this.name = 'name';
        this.moveToSelectedTab('My Contact Information');
        this.formContact = this.fb.group({
            id: [''],
            street: [
                localStorage.getItem('street')
                    ? localStorage.getItem('street')
                    : '',
                Validators.required,
            ],
            city: [
                localStorage.getItem('city')
                    ? localStorage.getItem('city')
                    : '',
                Validators.required,
            ],
            state: [
                localStorage.getItem('state')
                    ? localStorage.getItem('state')
                    : '',
                Validators.required,
            ],
            zip: [
                localStorage.getItem('zip') ? localStorage.getItem('zip') : '',
                Validators.required,
            ],
            country: [
                localStorage.getItem('country')
                    ? localStorage.getItem('country')
                    : '',
                Validators.required,
            ],
            phone: [
                localStorage.getItem('phone')
                    ? localStorage.getItem('phone')
                    : '',
                Validators.required,
            ],
            mobile: [
                localStorage.getItem('mobile')
                    ? localStorage.getItem('mobile')
                    : '',
                Validators.required,
            ],
            email: [user.username, Validators.required],
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

    onSubmit(data) {
        console.log(data);

        const newContact = new Contact();
        newContact.MailingStreet = data.street;
        newContact.MailingCity = data.city;
        newContact.MailingState = data.state;
        newContact.MailingPostalCode = data.zip;
        newContact.MailingCountry = data.Country;
        newContact.Phone = data.phone;
        newContact.MobilePhone = data.mobile;
        newContact.Email = data.Email;

        // this.loading = true;
        const results = this.contactsService.updateContact(newContact);
        if (results) {
            this.loading = false;
        } else {
            this.toastr.success('Contact Updated successfully!');
            this._matDialog.closeAll();
            localStorage.setItem('selectedTab','3');
            this.getContacts();
            window.location.reload();
            
        }
    }

    getContacts() {
        this.contactsService.getContactsByEmail().subscribe((x: Contact[]) => {
            //console.log("name",x['records'][0]?.Name);
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
        });
    }

    saveAndClose(): void {

        console.log('saved');
        this._matDialog.closeAll();
    }

}
