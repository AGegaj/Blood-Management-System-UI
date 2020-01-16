
export class CreateUser {
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  password: String;
  image: String;
  country: String;
  city: String;
  personalNumber: String;
  roleId: Number;

  constructor(name, surname, username, email, password,  image, country, city, personalNumber, roleId) {
    this.firstName = name;
    this.lastName = surname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.image = image;
    this.country = country;
    this.city = city;
    this.personalNumber = personalNumber;
    this.roleId = roleId;
  }

}
