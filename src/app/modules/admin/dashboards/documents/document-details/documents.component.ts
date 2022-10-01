import { Component, Input, OnInit } from '@angular/core';

import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy,OnDestroy,ViewEncapsulation} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { ProductsService } from 'app/services/products.service';
import { EquipmentsService } from 'app/services/equipment.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCommonModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';


import { Product } from 'app/models/product.models';
import { ProductDetailsComponent } from 'app/modules/admin/dashboards//products/product-details/product-details.component';



import { Coordinator } from 'app/models/coordinator.models';
import { CoordinatorsService } from 'app/services/coordinator.service';

import { DocumentsService } from 'app/services/documents.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { stringify } from 'crypto-js/enc-base64';
import { NavigationEnd } from '@angular/router';
import {ViewChild} from '@angular/core';

import { ThisReceiver } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';



import { MatDialog } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';

import { MatTabGroup } from '@angular/material/tabs';
import { Equipment } from 'app/models/equipment.models';
import { MatCardModule } from '@angular/material/card';





@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
    @Input() public product;

    constructor(
        
        private _matDialog: MatDialog,
        private productService: ProductsService,

        ) {}

    ngOnInit(): void {}
    saveAndClose(): void {
        this._matDialog.closeAll();
    }
}
