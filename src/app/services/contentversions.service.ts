import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentVersion } from 'app/models/contentversions.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class ContentVersionsService {

    private url: string;
    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}




















    //get attachments by email
    getContentVersionsByEmail(): Observable<ContentVersion[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
this.url =  environment.baseUrl +
`/query?q=SELECT+FIELDS(ALL)+FROM ContentVersion+WHERE+OwnerId+=+'005F0000003lTWwIAM'+LIMIT+200`
//`/query?q=SELECT+FIELDS(ALL)+FROM ContentVersion+WHERE+access__c+=+'${user.username}'+LIMIT+200`;

        return this.http.get<ContentVersion[]>(`${this.url}`,
        {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
