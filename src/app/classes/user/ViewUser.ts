export class ViewUser {
  id: Number;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  image: String;
  country: String;
  city: String;
  personalNumber: String;
  role: String;

  constructor(id, firstName, lastName, username, email, img, country, city, personalNumber, role) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.image = img;
    this.country = country;
    this.city = city;
    this.personalNumber = personalNumber;
    this.role = role;
  }

}
