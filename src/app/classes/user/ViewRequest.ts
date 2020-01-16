export class ViewRequest {

  requestId: Number;
  userFirstName: String;
  userLastName: String;
  personalNumber: String;
  bloodGroup: String;
  requiredDate: String;
  userEmail: String;
  status: String;

  constructor(id, name, lastname, personalNo, group, date, email) {
    this.requestId = id;
    this.userFirstName = name;
    this.userLastName = lastname;
    this.personalNumber = personalNo;
    this.bloodGroup = group;
    this.requiredDate = date;
    this.userEmail = email;
  }

}
