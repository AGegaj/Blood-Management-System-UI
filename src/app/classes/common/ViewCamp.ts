export class ViewCamp {
  campId: Number;
  campTitle: String;
  state: String;
  city: String;
  details: String;
  img: String;

  constructor(id, title, state, city, details, img) {
    this.campId = id;
    this.campTitle = title;
    this.state = state;
    this.city = city;
    this.details = details;
    this.img = img;
  }

}
