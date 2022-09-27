import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'app/models/contacts.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private url: string;
    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}

    //add bank
    updateContact(contactDetails: Contact): string {
        console.log(contactDetails);
        let returnData = '';
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            '/sobjects/Contact/' +
            localStorage.getItem('customerid');

        const headers = {
            Authorization: `Bearer ${user.access_token}`,
            'Content-type': 'application/json',
        };

        this.http
            .patch<any>(`${this.url}`, contactDetails, { headers })
            .subscribe({
                next: (data) => {
                    returnData = data;
                },
                error: (error) => {
                    returnData = 'There was an error: ' + error.message;
                },
            });

        return returnData;
    }

    //get contacts by email
    getContactsByEmail(): Observable<Contact[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT  MailingStreet, Name, MailingCity, MailingPostalCode, MailingState, MailingCountry, Id, Phone, MobilePhone, Email FROM+Contact+WHERE+Email+=+'${user.username}' +LIMIT+200`;

        //SELECT+FIELDS(ALL)+FROM+Contact+WHERE+Email+=+'${user.username}'+LIMIT+200`;
        return this.http
            .get<Contact[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
