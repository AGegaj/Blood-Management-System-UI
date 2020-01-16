import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Token} from '../classes/user/Token';


@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  public options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) {
  }

  public login(login){
    return this.http.post<HttpResponse<Token>>(`${environment.domain}/bloodmanagement/security/auth`, login, this.options);
  }


}
