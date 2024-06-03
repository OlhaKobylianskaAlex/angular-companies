import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const modifiedReq = request.clone({
      url: `${environment.API_HOST}${request.url}`,
      headers: headers,
      setParams: {
        limit: "30"
      }
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }
}
