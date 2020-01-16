export class EditUserData {

  id: Number;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  country: String;
  city: String;
  image: String;
  password: String;

  // tslint:disable-next-line:max-line-length
  constructor(id: Number, name: String, surname: String, username: String, email: String, country: String, city: String, image: String) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.username = username;
    this.email = email;
    this.country = country;
    this.city = city;
    this.image = image;
  }
}
