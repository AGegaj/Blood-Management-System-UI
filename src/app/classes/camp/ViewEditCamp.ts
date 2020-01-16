import {ViewCamp} from '../common/ViewCamp';

export class ViewEditCamp {
  status: Number;
  responseStatus: String;
  data: ViewCamp;

  constructor(status, responseStatus, data) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = data;
  }
}
