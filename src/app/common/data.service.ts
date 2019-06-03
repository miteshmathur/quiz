import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { config } from "../config";

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    /* To get getQuizData */
    public getQuizData(input: any): Observable<any> {
        if (config.production) {
            return this.httpClient.post(config.apiUrl.quiddata, input, this.httpOptions)
                .pipe(retry(1), catchError(this.handleError));
        } else {
            return this.httpClient.get(config.apiUrl.quiddata)
                .pipe(retry(1), catchError(this.handleError));
        }
    }

    public getQuizData2(input: any): Observable<any> {
        if (config.production) {
            return this.httpClient.post(config.apiUrl.quiddata2, input, this.httpOptions)
                .pipe(retry(1), catchError(this.handleError));
        } else {
            return this.httpClient.get(config.apiUrl.quiddata2)
                .pipe(retry(1), catchError(this.handleError));
        }
    }

    public getQuizData3(input: any): Observable<any> {
        if (config.production) {
            return this.httpClient.post(config.apiUrl.quiddata3, input, this.httpOptions)
                .pipe(retry(1), catchError(this.handleError));
        } else {
            return this.httpClient.get(config.apiUrl.quiddata3)
                .pipe(retry(1), catchError(this.handleError));
        }
    }

    /* Error Handler */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError("Something bad happened; please try again later.");
    }
}
