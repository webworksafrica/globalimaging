import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'app/models/contact.models';
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
    saveContact(contactDetails: Contact): Observable<any> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url = environment.baseUrl + '/sobjects/contact';
        contactDetails.Email = user.username;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://webworksafrica.github.io',
            'Access-Control-Request-Methods':'GET,POST,DELETE,OPTIONS',
            'Authorization': `Bearer + ${user.access_token}`,
            
            // eslint-disable-next-line @typescript-eslint/naming-convention
            
        });
        const options = { headers: headers };

        return this.http
            .post(`${this.url}`, contactDetails, {
                headers: headers,
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }



    //get contacts by email
    getContactsByEmail(): Observable<Contact[]> {
        let user = JSON.parse(localStorage.getItem('currentUser'));
this.url =  environment.baseUrl +
`/query?q=SELECT+FIELDS(ALL)+FROM+Contact+WHERE+Email+=+'${user.username}'+LIMIT+200`;
        return this.http.get<Contact[]>(`${this.url}`,
        {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
