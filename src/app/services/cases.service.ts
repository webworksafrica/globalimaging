import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Case } from 'app/models/cases.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

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
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.url = environment.baseUrl + '/sobjects/case';
        caseDetails.SuppliedEmail = user.username;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.access_token}`,
        });
        let options = { headers: headers };

        return this.http
            .post(`${this.url}`, caseDetails, {
                headers: headers,
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }


    //get products by email
    getCasesByEmail(): Observable<Case[]> {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT+CaseNumber,Status,Issue_type__c,Handler_in_contacts__c,Subject,Related_SKU__c,Ownerid FROM Case+WHERE+Status+=+'New'+AND+SuppliedEmail+=+'${user.username}'+LIMIT+200`
            // `/query?q=SELECT+Status,Ownerid,Description FROM Case+WHERE+Status+=+'New'+AND+SuppliedEmail+=+'${user.username}'+LIMIT+200`;

        return this.http
            .get<Case[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
