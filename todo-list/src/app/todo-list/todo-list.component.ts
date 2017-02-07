import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  idCounter: number;

  list = [
    {
      text: 'Something', isItemEditable: false
    },
    {
      text: 'Something else', isItemEditable: false
    },
    {
      text: 'Something else else', isItemEditable: false
    },
  ];

  constructor() {
  }

  addToList(){
    this.list.push({text: '', isItemEditable: true});
  }

  ngOnInit() {
  }

  onItemCheck(id: number) {
    this.list.splice(id, 1);
  }
}
