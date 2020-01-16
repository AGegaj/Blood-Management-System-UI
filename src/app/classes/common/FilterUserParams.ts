export class FilterUserParams {

  firstName: String;
  lastName: String;
  personalNumber: String;
  city: String;


  constructor(fistName: String, lastName: String, personalNumber: String, city: String) {
    this.firstName = fistName;
    this.lastName = lastName;
    this.personalNumber = personalNumber;
    this.city = city;
  }
}
