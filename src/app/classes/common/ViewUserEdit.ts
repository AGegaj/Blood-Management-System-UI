import {ViewRoleData} from './ViewRoleData';

export class ViewUserEdit {

  image: String;
  firstName: String;
  lastName: String;
  username: String;
  personalNumber: String;
  birthday: String;
  phone: String;
  country: String;
  city: String;
  street: String;
  zipCode: String;
  email: String;
  status: String;
  role: String;
  // tslint:disable-next-line:max-line-length
  constructor(image, name, surname, username, personalNumber, birthday, phone, country, city, street, zipCode, email, status, role) {
    this.image = image;
    this.firstName = name;
    this.lastName = surname;
    this.username = username;
    this.personalNumber = personalNumber;
    this.birthday = birthday;
    this.phone = phone;
    this.country = country;
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
    this.email = email;
    this.status = status;
    this.role = role;
  }
}
