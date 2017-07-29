import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';
import {Todo} from "../model/todo.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  host: {'class': 'list-group-item'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @ViewChild('todoitem') todoItem;

  @Input() todo: Todo;
  @Input() disabledEditing: boolean;
  isEditing: boolean;


  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onToggleEditing = new EventEmitter();


  deleteTodo() {
    this.onDelete.emit(this.todo);
  }

  toggleEditing() {
    this.onToggleEditing.emit(!this.isEditing ? this.todo : null);
    if (!this.isEditing) {
      setTimeout(()=>this.todoItem.nativeElement.focus());
    }
    else {
      this.todoItem.nativeElement.value = this.todo.text;
    }
    this.isEditing = !this.isEditing;
  }



  updateTodo() {
    this.onToggleEditing.emit();
    let newTodo = {...this.todo};
    newTodo.text = this.todoItem.nativeElement.value;
    this.onEdit.emit(newTodo);
  }

  toggleTodo() {
    let updated = {...this.todo};
    updated.completed = !updated.completed;
    this.onEdit.emit(updated);
  }
}
