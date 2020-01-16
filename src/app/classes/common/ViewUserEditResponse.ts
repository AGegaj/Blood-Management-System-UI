import {ViewUserEdit} from './ViewUserEdit';

export class ViewUserEditResponse {
  status: Number;
  responseStatus: String;
  data: ViewUserEdit;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
