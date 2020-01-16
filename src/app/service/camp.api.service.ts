import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
  import {ViewCampResponse} from '../classes/common/ViewCampResponse';
import {ViewEditCamp} from '../classes/camp/ViewEditCamp';
import {ViewDonationResponse} from '../classes/common/ViewDonationResponse';
import {ViewUsersResponse} from '../classes/user/ViewUsersResponse';


@Injectable({
  providedIn: 'root'
})
export class CampApiService {

  public options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) {
  }


  public createCamp(campData) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/camp/create`, campData, this.options);
  }

  public updateCamp(campData) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/camp/update`, campData, this.options);
  }

  public getCampsList() {
    return this.http.get<ViewCampResponse>(`${environment.domain}/camp/getAll`);
  }

  public getCampById(id) {
    return this.http.get<ViewEditCamp>(`${environment.domain}/camp/get?campId=${id}`)
  }

  public getAllDonations() {
    return this.http.get<ViewDonationResponse>(`${environment.domain}/donation/getAll`);
  }

  public getAllDonationsById(id) {
    return this.http.get<ViewDonationResponse>(`${environment.domain}/donation/getAllByUserId?userId=${id}`);
  }

  public filterDonation(params) {
    return this.http.post<ViewDonationResponse>(`${environment.domain}/donation/filter`, params);
  }


}
