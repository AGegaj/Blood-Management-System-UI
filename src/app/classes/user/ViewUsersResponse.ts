import {ViewUser} from './ViewUser';
import {ViewDonator} from './ViewDonator';

export class ViewUsersResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewDonator>;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
