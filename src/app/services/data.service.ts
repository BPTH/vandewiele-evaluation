import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, pipe, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(
        private http: HttpClient
    ) { }

    getUniversities(query?: string): Observable<any> {
        return this.http.get(`http://universities.hipolabs.com/search${query ? query : ''}`)
            .pipe(
                tap(result => {
                })
            );
    }
}