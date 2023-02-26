import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Room",
      ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021")
    },
    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 1000,
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021")
    },
    {
      roomNumber: 3,
      roomType: "Private Suite",
      ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 15000,
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021")
    }
  ]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
