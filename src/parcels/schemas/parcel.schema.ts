export default class Parcel {
  id: number;
  name: string;
  pickupAddress: string;
  dropoffAddress: string;
  sender: number;
  biker?: number;
  pickedAt?: Date;
  droppedAt?: Date;
}
