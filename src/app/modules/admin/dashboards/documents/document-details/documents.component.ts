import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

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
