import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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
  
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotels";
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }

  // role = "Admin";
}
