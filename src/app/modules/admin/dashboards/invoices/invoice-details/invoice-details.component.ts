import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contentversion-details',
  templateUrl: './contentversion-details.component.html',
  styleUrls: ['./contentversion-details.component.scss']
})
export class ContentVersionDetailsComponent implements OnInit {

  @Input() public contentversion;

  constructor(private _matDialog: MatDialog,) { }

  ngOnInit(): void {
  }
  saveAndClose(): void
  {
    this._matDialog.closeAll();
  }
}
