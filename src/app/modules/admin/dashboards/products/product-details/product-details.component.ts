import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() public product;

  constructor(private _matDialog: MatDialog,) { }
 

  ngOnInit(): void {
  }
  saveAndClose(): void
  {
    this._matDialog.closeAll();
  }
}


