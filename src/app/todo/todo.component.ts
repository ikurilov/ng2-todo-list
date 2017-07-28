import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../model/todo-model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  host: {'class': 'list-group-item'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.onDelete.emit(this.todo);
  }
}
