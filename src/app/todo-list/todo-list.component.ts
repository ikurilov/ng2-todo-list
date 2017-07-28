import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
  host: {'class':'list-group'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todos: any[];
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteTodo(todo) {
    this.onDelete.emit(todo);
  }
}
