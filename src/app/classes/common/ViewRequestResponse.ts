import {ViewRequest} from '../user/ViewRequest';

export class ViewRequestResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewRequest>;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
