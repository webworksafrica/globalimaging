import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Case } from 'app/models/cases.models';
import { CasesService } from 'app/services/cases.service';

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
     private fb: FormBuilder,) {
    this.formCase = this.fb.group({
      id: [""],
      Subject: ["", Validators.required],
      Description: ["", Validators.required],
      Handler_in_Contacts__c: ["", Validators.required],
      Issue_type__c: ["", Validators.required],
      SuppliedEmail: ["", Validators.required],
      SuppliedPhone: ["", Validators.required],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(data);

    let newCase = new Case();
    newCase.Description = data.Description;
    newCase.Handler_in_Contacts__c = data.Handler_in_Contacts__c;
    newCase.Issue_type__c = data.Issue_type__c;
    newCase.Subject = data.Subject;
    newCase.SuppliedEmail = data.SuppliedEmail;
    newCase.SuppliedPhone = data.SuppliedPhone;

    // this.loading = true;
    this.caseService.saveCase(newCase).subscribe(
      (x: any) => {
        debugger
        console.log("success");
        console.log(x);
        // this.loading = false;
        debugger
        this.formCase.reset();
        alert("Case submitted successfully");
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
