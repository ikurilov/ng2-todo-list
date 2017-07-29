import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  host: {'class': 'list-group-item'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.onDelete.emit(this.todo);
  }

  updateTodo() {
    this.onEdit.emit(this.todo);
  }

  toggleTodo() {
    let updated = {...this.todo};
    updated.completed = !updated.completed;
    this.onEdit.emit(updated);
  }

  ngAfterContentChecked() {
    console.log('check item', this.todo.text);
  }
}
