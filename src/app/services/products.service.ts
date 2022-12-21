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
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            // eslint-disable-next-line max-len
            `/query?q=SELECT Name, Equipment__c, Serial__c, Buyer__c, Date_Sold__c, Install_Date__c, Id, Buyer_in_Contacts__c, Coordinator_in_contacts__c, Warranty_Expire_Date_Labor__c, Warranty_Expire_Date_Parts__c, Salesperson__c, Freight_Carrier__c, Carrier_Tracking_PRO__c, Source_ID__c FROM+Product2+WHERE+Buyer_email_from_contacts__c+=+'${user.username}' AND RecordTypeId != '0122A000001QHDVQA4'  +LIMIT+200`;
        return this.http
            .get<Product[]>(`${this.url}`, {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
