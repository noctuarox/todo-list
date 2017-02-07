import { Component, OnInit, Input, Output, EventEmitter, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        opacity: 1
      })),
      state('removed', style({
        opacity: 0
      })),
      transition('shown => removed', animate('0.5s'))
    ])
  ]
})
export class TodoListItemComponent implements OnInit {

  @Output() check = new EventEmitter<number>();
  @Input() text: string;
  @Input() id: number;
  @Input() isItemEditable: boolean;

  visibility: 'shown'|'removed' = 'shown';

  constructor() {
  }

  ngOnInit() {
  }

  onChangeListItem() {
    this.visibility = this.visibility === 'shown' ? 'removed' : 'shown';
  }

  onListItemRemoval() {
    if (this.visibility === 'removed') {
      this.check.emit(this.id);
    }
  }

  get htmlId() {
    return `id${this.id}`;
  }
}
