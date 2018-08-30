import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  taskList:string[] = [];

  itemAdded(item:string) {
    console.log('>>>> new item: ', item);
    this.taskList.push(item);
  }
  // addItem(item) {
  //   console.log('items: ', item)
  // }
}
