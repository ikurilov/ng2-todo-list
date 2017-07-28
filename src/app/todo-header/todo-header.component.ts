import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.less'],
  host: {'class':'panel-heading'}
})
export class TodoHeaderComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  todoText: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.onAdd.emit(this.todoText);
    this.todoText = null;
  }
}
