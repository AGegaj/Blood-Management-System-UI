import {ViewBlood} from './ViewBlood';

export class ViewBloodResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewBlood>;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
