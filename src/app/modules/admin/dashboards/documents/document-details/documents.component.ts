import { Component, Input, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy,OnDestroy,ViewEncapsulation} from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { ProductsService } from 'app/services/products.service';
import { EquipmentsService } from 'app/services/equipment.service';
import { CommonModule } from '@angular/common';


import { MatDialog } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';

import { MatTabGroup } from '@angular/material/tabs';
import { Equipment } from 'app/models/equipment.models';


import { DocumentsService } from 'app/services/documents.service';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
    @Input() public product;

    constructor(private _matDialog: MatDialog) {}

    ngOnInit(): void {}
    saveAndClose(): void {
        this._matDialog.closeAll();
    }
}
