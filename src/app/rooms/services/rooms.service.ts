import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log("Room Service Initialised...");
  }

  getRooms() {
    return this.roomList;
  }
}
