import {ViewBloodGroup} from './ViewBloodGroup';

export class ViewGroupResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewBloodGroup>;

  constructor(status, responseStatus, dataList) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = dataList;
  }
}
