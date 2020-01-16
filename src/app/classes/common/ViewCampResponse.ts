import {ViewCamp} from './ViewCamp';

export class ViewCampResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewCamp>;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
