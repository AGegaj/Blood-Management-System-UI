import {ViewDonator} from './ViewDonator';

export class ViewDonatorResponse {
  status: Number;
  responseStatus: String;
  data: ViewDonator;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
