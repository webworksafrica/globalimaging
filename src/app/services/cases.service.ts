/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Case } from 'app/models/cases.models';
import { Product } from 'app/models/product.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { MatSelectModule } from '@angular/material/select';


@Injectable({
    providedIn: 'root',
})
export class CasesService {
    private url: string;
    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}

    //add bank
    saveCase(caseDetails: Case): Observable<any> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url = environment.baseUrl + '/sobjects/case';
        caseDetails.SuppliedEmail = user.username;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'append,post,delete,entries,foreach,get,has,keys,set,values,Authorization',
            'Access-Control-Allow-Methods':'GET,POST,DELETE,PUT,PATCH,OPTIONS',
            'Authorization': `Bearer ${user.access_token}`,
            'Access-Control-Allow-Credentials': 'Server,range,hdntl,hdnts',


        });
        const options = { headers: headers };

        return this.http
            .post(`${this.url}`, caseDetails, {
                headers: headers,
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }


    //get cases by email
    getCasesByEmail(): Observable<Case[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT+FIELDS(ALL)+FROM Case+WHERE+ContactEmail+=+'${user.username}'+LIMIT+200`;
            // `/query?q=SELECT+FIELDS(ALL)+FROM Case+WHERE+Status+=+'New'+AND+SuppliedEmail+=+'${user.username}'+LIMIT+200`;

        return this.http
            .get<Case[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }

    //get products by email
    getProductsByEmail(): Observable<Product[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT Name, Equipment__c, Serial__c, Buyer__c, Date_Sold__c, Install_Date__c, Id, Buyer_in_Contacts__c, Coordinator_in_contacts__c, Warranty_Expire_Date_Labor__c, Warranty_Expire_Date_Parts__c, Salesperson__c, Freight_Carrier__c, Carrier_Tracking_PRO__c, Source_ID__c FROM+Product2+WHERE+Buyer_email_from_contacts__c+=+'${user.username}' AND RecordTypeId != '0122A000001QHDVQA4'  +LIMIT+200`;

        return this.http
            .get<Product[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
