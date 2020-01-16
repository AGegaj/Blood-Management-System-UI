import {ViewRoleData} from "./ViewRoleData";

export class ViewRoleResponse {
  status: Number;
  responseStatus: String;
  data: Array<ViewRoleData>;

  constructor(status, responseStatus, dataList) {
    this.status = status;
    this.responseStatus = responseStatus;
    this.data = dataList;
  }
}
