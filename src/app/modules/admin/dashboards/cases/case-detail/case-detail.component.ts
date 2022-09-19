import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { Injectable } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  @Input() public case_;

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
