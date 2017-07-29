import {
  AfterContentChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
  host: {'class':'list-group'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, AfterContentChecked {
  @Input() todos: any[];
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteTodo(todo) {
    this.onDelete.emit(todo);
  }

  onEditTodo(todo) {
    this.onEdit.emit(todo);
  }

  ngAfterContentChecked() {
    console.log('check list');
  }
}
