import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {


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

  addToList(){
    this.list.push({text: '', isItemEditable: true});
  }

  onItemCheck(id: number) {
    this.list.splice(id, 1);
  }
}
