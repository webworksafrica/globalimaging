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
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.url = environment.baseUrl + '/sobjects/case';
        caseDetails.SuppliedEmail = user.username;
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://webworksafrica.github.io',
            'Access-Control-Request-Methods':'GET,POST,DELETE,OPTIONS',
            "Authorization": `Bearer ${user.access_token}`,
            // eslint-disable-next-line @typescript-eslint/naming-convention

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
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT+FIELDS(ALL)+FROM Case+WHERE+Status+=+'New'+AND+SuppliedEmail+=+'${user.username}'+LIMIT+200`
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
            `/query?q=SELECT+FIELDS(ALL)+FROM Product2+WHERE+SuppliedEmail+=+'${user.username}'+LIMIT+200`;

        return this.http
            .get<Product[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
