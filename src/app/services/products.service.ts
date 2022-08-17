import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/models/product.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {

    private url: string;

    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}
    // drprada@mesquitedentalsolutions.com
    //get products by email
    getProductsByEmail(): Observable<Product[]> {
        var user = JSON.parse(localStorage.getItem('currentUser'));
this.url =  environment.baseUrl +
`/query?q=SELECT+FIELDS(ALL)+FROM+Product2+WHERE+Buyer_email_from_contacts__c+=+'${user.username}'+LIMIT+200`;
        return this.http.get<Product[]>(`${this.url}`,
        {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
