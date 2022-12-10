import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  @Input() public invoice;
product: any;

  constructor(private _matDialog: MatDialog,) { }

  ngOnInit(): void {
  }
  saveAndClose(): void
  {
    this._matDialog.closeAll();
  }
}

@Component({
  selector: 'app-product-details',
  templateUrl: '../../products/product-details/product-details.component.html',
  styleUrls: ['../../products/product-details/product-details.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() public product;

  constructor(private _matDialog: MatDialog,) { }

  ngOnInit(): void {
  }
  saveAndClose(): void
  {
    this._matDialog.closeAll();
  }

}
