import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'app/models/document.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class DocumentsService {
    private url: string;

    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}
    getDocumentsUsingProductId(equipmentId): Observable<Document[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT+FIELDS(ALL)+FROM+Equipment__c+WHERE+Id+=+'${equipmentId}'`;
        return this.http
            .get<Document[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }

    getDocumentTitleUsingContentDocumentId(
        contentDocumentId
    ): Observable<Document[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT Id, Title FROM ContentDocument where Id = '${contentDocumentId}'`;
        return this.http
            .get<Document[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }

    getBlobDataById(contentDocumentId): Observable<Document[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/sobjects/ContentDocument/${contentDocumentId}`;
        return this.http
            .get<Document[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
