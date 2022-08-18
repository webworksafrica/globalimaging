import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Case } from 'app/models/cases.models';
import { CasesService } from 'app/services/cases.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.scss']
})
export class CreateCaseComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  formCase: FormGroup;
  cases: Case[] = [];
  loading: boolean = false;



  constructor(
     private _matDialog: MatDialog,
     private caseService: CasesService,
     private fb: FormBuilder,
     private toastr: ToastrService) {
      var user = JSON.parse(localStorage.getItem('currentUser'));
    this.formCase = this.fb.group({
      id: [""],
      Subject: ["", Validators.required],
      Description: ["", Validators.required],
      Handler_in_Contacts__c: ["0035d00006goiaHAAQ"],
      Issue_type__c: ["General inquiry"],
      SuppliedEmail: [user.username, Validators.required],
      SuppliedPhone: [""],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(data);
    var user = JSON.parse(localStorage.getItem('currentUser'));
    // debugger;
    let newCase = new Case();
    newCase.Description = data.Description;
    newCase.Handler_in_Contacts__c = "0035d00006goiaHAAQ";
    newCase.Issue_type__c = data.Issue_type__c;
    newCase.Subject = data.Subject;
    newCase.SuppliedEmail = user.username;
    newCase.SuppliedPhone = data.SuppliedPhone;

    // this.loading = true;
    this.caseService.saveCase(newCase).subscribe(
      (x: any) => {
        console.log("success");
        console.log(x);
        // this.loading = false;
        debugger
        this.formCase.reset();
        this.toastr.success('Case submitted successfully!', 'New Case!');
        this.formCase.reset();

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
