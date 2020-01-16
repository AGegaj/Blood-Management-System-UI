import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, finalize} from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');
    if (token !== null) {
      let cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token).set('Language', 'en')
      });
      return next.handle(cloned);
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 401){
          localStorage.clear();
          this.router.navigate(['/login']);
          return throwError(
            {
              status: error.status,
              message: "ERROR"
            }
          )
        } else{
          this.router.navigate(['/dashboard']);
          throwError(
            {
              status: error.status,
              message: "ERROR"
            }
          )
        }
      })
    )
  }
}
