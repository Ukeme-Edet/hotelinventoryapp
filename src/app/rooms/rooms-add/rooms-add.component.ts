import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room: RoomList = {
    roomType: "",
    amenities: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: "",
    price: 0,
    rating: 0
  }

  successMessage!: string;

  constructor(private roomService: RoomsService) { }

  addRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe(() => {
      this.successMessage = "Room Added Sucessfully";
      roomsForm.resetForm({
        roomType: "",
        amenities: "",
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: "",
        price: 0,
        rating: 0
      })
    });
  }
}
