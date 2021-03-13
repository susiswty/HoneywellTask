import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  loaderToShow: any;
  isLoading = false;

  constructor(public toastController: ToastController,
    private dataService: DataService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token,
          'x-access-token': token
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS, PUT, HEAD',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json; charset=utf-8')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        return throwError(error);
      }));
  }

}