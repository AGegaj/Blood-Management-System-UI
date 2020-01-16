export class CreateCamp {
  campTitle: String;
  city: String;
  state: String;
  details: String;
  img: String;

  constructor(title, city, state, details, img) {
    this.campTitle = title;
    this.city = city;
    this.state = state;
    this.details = details;
    this.img = img;
  }

}
