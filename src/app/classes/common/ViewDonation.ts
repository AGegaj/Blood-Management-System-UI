export class ViewDonation {
  campId: Number;
  userId: Number;
  donationId: Number;
  campTitle: String;
  quantity: String;
  state: String;
  city: String;
  donationDate: String;
  firstName: String;
  lastName: String;
  group: String;
  personalNumber: String;

  constructor(userId, campId, donationId, campTitle, quantity, state, city, donationDate, firstName, lastName, group, personalNumber) {
    this.campId = campId;
    this.userId = userId;
    this.donationId = donationId;
    this.campTitle = campTitle;
    this.quantity = quantity
    this.state = state;
    this.city = city;
    this.donationDate = donationDate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.personalNumber = personalNumber;
  }

}
