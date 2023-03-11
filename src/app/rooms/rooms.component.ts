import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, of, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title: string = "Room List";

  roomList!: RoomList[];

  stream = new Observable<string>(observer => {
    observer.next("user1");
    observer.next("user2");
    observer.next("user3");
    observer.complete();
    // observer.error("error");
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponenet!: QueryList<HeaderComponent>;

  // roomService: RoomsService = new RoomsService();

  error!: string;

  totalBytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsSercice.getRooms$.pipe(
    catchError(err => {
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsSercice.getRooms$.pipe(
    map(rooms => rooms.length)
  );

  constructor(@SkipSelf() private roomsSercice: RoomsService) { }

  ngOnInit(): void {
    this.roomsSercice.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Request has been made!");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Request success!");
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    this.stream.subscribe({
      next: value => console.log(value),
      complete: () => console.log("complete"),
      error: err => console.log(err)
    });
    this.stream.subscribe(data => console.log(data));
    // this.roomsSercice.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
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
      // roomNumber: "4",
      roomType: "Deluxe Room",
      ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomsSercice.addRoom(room).subscribe(data => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: "3",
      roomType: "Deluxe Room",
      ammenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };

    this.roomsSercice.editRoom(room).subscribe(data => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsSercice.delete("3").subscribe(data => {
      this.roomList = data;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
