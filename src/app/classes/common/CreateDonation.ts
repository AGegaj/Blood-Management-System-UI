export class CreateDonation {
  quantity: Number;
  userId: Number;
  campId: Number;
  details: String;

  constructor(quantity, userId, campId, details) {
    this.quantity = quantity;
    this.userId = userId;
    this.campId = campId;
    this.details = details;
  }
}
