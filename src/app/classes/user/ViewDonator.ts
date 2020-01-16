export class ViewDonator {
  id: Number;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  createdDate: String;
  image: String;
  country: String;
  city: String;
  personalNumber: String;
  role: String;
  weight: Number;
  age: Number;
  group: String;
  gender: String;

  constructor(id: Number, firstname: String, lastName: String, username: String, email: String, createdDate: String, image: String, country: String, city: String, personalNumber: String, role: String, weight: Number, age: Number, group: String, gender: String) {
    this.id = id;
    this.firstName = firstname;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.createdDate = createdDate;
    this.image = image;
    this.country = country;
    this.city = city;
    this.personalNumber = personalNumber;
    this.role = role;
    this.weight = weight;
    this.age = age;
    this.group = group;
    this.gender = gender;
  }
}
