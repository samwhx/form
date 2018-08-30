import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {

  // @Output()
  // onAddItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addItem (form:NgForm) {
    console.log ('form: ', form.value);
    // this.onAddItem.next(form.value)
    form.reset();
  }

}
