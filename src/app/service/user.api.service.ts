import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ViewRoleResponse} from '../classes/common/ViewRoleResponse';
import {ViewUserEditResponse} from '../classes/common/ViewUserEditResponse';
import {ViewUsersResponse} from '../classes/user/ViewUsersResponse';
import {CreateDonation} from '../classes/common/CreateDonation';
import {ViewGroupResponse} from '../classes/common/ViewGroupResponse';
import {ViewRequestResponse} from '../classes/common/ViewRequestResponse';
import {ViewDonator} from '../classes/user/ViewDonator';
import {ViewDonatorResponse} from '../classes/user/ViewDonatorResponse';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  public options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) {
  }

  public getUserRoles() {
    return this.http.get<ViewRoleResponse>(`${environment.domain}/bloodmanagement/user/role`);
  }

  public getGroups() {
    return this.http.get<ViewGroupResponse>(`${environment.domain}/bloodmanagement/user/groups`);
  }


  public createUser(userData) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/bloodmanagement/user/create`, userData, this.options);
  }

  public updateUserClient(userData) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/bloodmanagement/user/update`, userData, this.options);
  }


  public getUserForUpdate(id) {
    return this.http.get<ViewUserEditResponse>(`${environment.domain}/bloodmanagement/user/get?userId=${id}`);
  }

  public getDonorForUpdate(id) {
    return this.http.get<ViewDonatorResponse>(`${environment.domain}/bloodmanagement/user/get-donator?id=${id}`);
  }

  public updateUser(updateUser) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/bloodmanagement/user/update`, updateUser);
  }

  public updatePassword(updatePw) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/bloodmanagement/user/update-password`, updatePw);
  }

  public getUserList() {
    return this.http.get<ViewUsersResponse>(`${environment.domain}/bloodmanagement/user/getAll`);
  }

  public createDonation(donation) {
    return this.http.post<CreateDonation>(`${environment.domain}/donation/create`, donation)
  }


  public getAllRequests() {
    return this.http.get<ViewRequestResponse>(`${environment.domain}/request/getAll`);
  }


  public getAllRequestsById(id) {
    return this.http.get<ViewRequestResponse>(`${environment.domain}/request/getAllByUserId?userId=${id}`);
  }


  public createRequest(request) {
    return this.http.post<HttpResponse<any>>(`${environment.domain}/request/create`, request);
  }

  public filterRequestByStatus(status) {
    return this.http.get<ViewRequestResponse>(`${environment.domain}/request/filter-request?status=${status}`);
  }

  public filterRequestByStatusAndId(status, id) {
    return this.http.get<ViewRequestResponse>(`${environment.domain}/request/filter-request-userId?status=${status}&userId=${id}`);
  }


  public confirmRequest(requestId) {
    return this.http.get(`${environment.domain}/request/confirm?requestId=${requestId}`);
  }


  public delete(requestId) {
    return this.http.get(`${environment.domain}/request/delete?requestId=${requestId}`);
  }


  public deleteUser(userId) {
    return this.http.get(`${environment.domain}/bloodmanagement/user/delete?id=${userId}`);
  }

  public filterUsers(params) {
    return this.http.post<ViewUsersResponse>(`${environment.domain}/bloodmanagement/user/filter`, params);
  }


}
