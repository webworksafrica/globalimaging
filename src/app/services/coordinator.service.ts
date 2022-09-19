import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinator } from 'app/models/coordinator.models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class CoordinatorsService {
    private url: string;

    constructor(
        private http: HttpClient,
        private errorHandler: ErrorHandlerService
    ) {}
    getCoordinatorById(coordinatorId): Observable<Coordinator[]> {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.url =
            environment.baseUrl +
            `/query?q=SELECT+ Name, Email, Phone +FROM+Contact+WHERE+ID+=+'${coordinatorId}'+LIMIT+1`;
        return this.http
            .get<Coordinator[]>(`${this.url}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            })
            .pipe(catchError(this.errorHandler.errorHandler));
    }
}
