import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() public contact: any;

  constructor(private _matDialog: MatDialog,) { }

  ngOnInit(): void {
  }
  saveAndClose(): void
  {
    this._matDialog.closeAll();
  }
}
