import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from 'app/models/invoice.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class InvoiceService {
    private url: string;

    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}
    // drprada@mesquitedentalsolutions.com
    //get invoice by ownerid
    getInvoiceByOwnerId(): Observable<Invoice[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            // eslint-disable-next-line max-len
            `/query?q=SELECT+FIELDS(ALL)+FROM+Invoicing__c+WHERE+Email__c+=+'${user.username}'+Limit+200 +LIMIT+200`;
        return this.http
            .get<Invoice[]>(`${this.url}`, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
