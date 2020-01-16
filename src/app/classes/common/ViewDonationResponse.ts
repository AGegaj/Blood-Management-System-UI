import {ViewDonation} from './ViewDonation';

export class ViewDonationResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewDonation>;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
