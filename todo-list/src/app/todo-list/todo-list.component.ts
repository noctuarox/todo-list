import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  idCounter: number;

  list: any[] = [
    {
      text: 'Something'
    },
    {
      text: 'Something else'
    },
    {
      text: 'Something else else'
    },
  ];

  constructor() {
  }

  addToList(){
    this.list.push({text: ''});
  }

  ngOnInit() {
  }

  onItemCheck(id: number) {
    this.list.splice(id, 1);
  }
}
