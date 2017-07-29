import {
  AfterContentChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit,
  Output
} from '@angular/core';
import {Todo} from "../model/todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
  host: {'class': 'list-group'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos: any[];
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  currentEditingTodo: Todo;

  constructor() {
  }

  onDeleteTodo(todo) {
    this.onDelete.emit(todo);
  }

  onEditTodo(todo) {
    this.onEdit.emit(todo);
  }

  toggleEditingTodo(todo) {
    this.currentEditingTodo = todo ? todo : null;
  }
}
