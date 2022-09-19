import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'app/models/contacts.models';
import { ContactsService } from 'app/services/contacts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  formContact: FormGroup;
  contacts: Contact[] = [];
  loading: boolean = false;



  constructor(
     private _matDialog: MatDialog,
     private contactService: ContactsService,
     private fb: FormBuilder,
     private toastr: ToastrService) {
      var user = JSON.parse(localStorage.getItem('currentUser'));
    this.formContact = this.fb.group({
      id: [""],
      MailingStreet: ["", Validators.required],
      MailingCity: ["", Validators.required],
      MailingState: [""],
      MailingPostalCode: [""],
      MailingCountry: [""],
      Email: [user.username, Validators.required],
      Phone: [""],
      MobilePhone: [""],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(data);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    // debugger;
    const newContact = new Contact();
    newContact.MailingStreet = data.MailingStreet;
    newContact.MailingCity = data.MailingCity;
    newContact.MailingState = data.MailingState;
    newContact.MailingPostalCode = data.MailingPostalCode;
    newContact.Email = user.username;
    newContact.Phone = data.Phone;
    


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
