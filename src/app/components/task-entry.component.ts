import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem (form:NgForm) {
    console.log ('form: ', form.value);
    form.reset();
  }

}
