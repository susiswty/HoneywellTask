import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastAlertService } from './toast-alert.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private toastService: ToastAlertService) {

  }

  post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data)).pipe(
      tap(_ => this.log('postMethod')),
      catchError(this.handleError('postMethod', []))
    );
  }

  put(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.put(url, JSON.stringify(data)).pipe(
      tap(_ => this.log('putMethod')),
      catchError(this.handleError('putMethod', []))
    );
  }

  get(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    return this.http.get(url).pipe(
      tap(_ => this.log('getMethod')),
      catchError(this.handleError('getMethod', []))
    );
  }

  patch(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.patch(url, JSON.stringify(data)).pipe(
      tap(_ => this.log('putMethod')),
      catchError(this.handleError('putMethod', []))
    );
  }

  delete(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    return this.http.delete(url).pipe(
      tap(_ => this.log('deleteMethod')),
      catchError(this.handleError('deleteMethod', []))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // console.error(error.error.errorMessage); // log to console instead.
      if (error.status == 500) {
        this.toastService.alertMessage('Internal server error')
      }

      else if (error.status == 400) {
        console.log(error, error.title)
        this.toastService.alertMessage('Something went wrong!')

      }
      else if (error.status == 404) {
        this.toastService.alertMessage("No data found")
      }
      else if (error.status == 401) {
      }
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      result = error
      // Let the app keep running by returning an empty result.
      return of(result as T);

    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }


}
