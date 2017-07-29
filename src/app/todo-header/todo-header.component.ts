import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.less'],
  host: {'class':'panel-heading'}
})
export class TodoHeaderComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  todoText: string = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoText = this.todoText.trim();
    if (this.todoText.length) {
      this.onAdd.emit(this.todoText);
      this.todoText = '';
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  }
}
