import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from 'app/models/equipment.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class EquipmentsService {
    private url: string;

    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}
    // drprada@mesquitedentalsolutions.com
    getEquipmentById(equipmentId): Observable<Equipment[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT+FIELDS(ALL)+FROM+Equipment__c+WHERE+ID+=+'${equipmentId}'+LIMIT+1`;
        return this.http
            .get<Equipment[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
