import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {

  @Output()
  onAddItem = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  addItem (form:NgForm) {
    console.log ('form: ', form.value);
    this.onAddItem.next(form.value);
    form.reset();
  }

}
