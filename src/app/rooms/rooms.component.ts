import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title: string = "Room List"

  roomList!: RoomList[];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponenet!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe Room",
        ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 500,
        photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        checkinTime: new Date("11-Nov-2021"),
        checkoutTime: new Date("12-Nov-2021"),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: "Deluxe Room",
        ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 1000,
        photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        checkinTime: new Date("11-Nov-2021"),
        checkoutTime: new Date("12-Nov-2021"),
        rating: 3.45654
      },
      {
        roomNumber: 3,
        roomType: "Private Suite",
        ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 15000,
        photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        checkinTime: new Date("11-Nov-2021"),
        checkoutTime: new Date("12-Nov-2021"),
        rating: 2.6
      }
    ];
  }

  ngDoCheck(): void {
    console.log("on changes is called");
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponenet.last.title = "Last Title"

    console.log(this.headerChildrenComponenet.last.title = "Last Title");
  }

  ngAfterViewChecked(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = this.title.split("").reverse().join("");
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom(): void {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Deluxe Room",
      ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    }

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
