import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ViewBloodResponse} from '../classes/common/ViewBloodResponse';


@Injectable({
  providedIn: 'root'
})
export class BloodBankApiService {

  public options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) {
  }


  public getBloodList() {
    return this.http.get<ViewBloodResponse>(`${environment.domain}/blood-bank/get`);
  }



}
