import {DonatorDetails} from './DonatorDetails';
import {DonatorDetailsUpdate} from './DonatorDetailsUpdate';

export class UpdateUserWithDetails {
  id: Number;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  image: String;
  country: String;
  city: String;
  donatorDetailsUpdate: DonatorDetailsUpdate;

  constructor(id, name, surname, username, email,  image, country, city, donatorDetailsUpdate) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.username = username;
    this.email = email;
    this.image = image;
    this.country = country;
    this.city = city;
    this.donatorDetailsUpdate = donatorDetailsUpdate;
  }
}
