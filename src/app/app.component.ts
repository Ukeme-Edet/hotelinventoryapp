import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Hello World from inline template</h1>
  //   <p>Angular is awesome</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 { color: red }`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService, @Inject(LocalStorageToken) private localStorage: Storage) { }
  
  ngOnInit(): void {
    this.loggerService?.log('AppComponenet.ngOnInit()')
    this.name.nativeElement.innerText = "Hilton Hotels";
    this.localStorage.setItem("name", "Hilton Hotels");
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }

  // role = "Admin";
}
