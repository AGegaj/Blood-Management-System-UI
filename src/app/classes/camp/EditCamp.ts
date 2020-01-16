export class EditCamp {
  campId: Number;
  campTitle: String;
  city: String;
  state: String;
  details: String;
  img: String;

  constructor(campId, title, city, state, details, img) {
    this.campId = campId;
    this.campTitle = title;
    this.city = city;
    this.state = state;
    this.details = details;
    this.img = img;
  }

}
