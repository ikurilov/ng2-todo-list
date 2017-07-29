import {
  ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild
} from '@angular/core';
import {Todo} from "../model/todo.model";
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  host: {'class': 'list-group-item'},
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnChanges{
  @ViewChild('todoitem') todoItem;

  @Input() todo: Todo;
  @Input() disabledEditing: boolean;
  isEditing: boolean;


  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onToggleEditing = new EventEmitter();

  constructor(public el: ElementRef) {
  }

  startEditingTodo() {
    if (!this.disabledEditing) {
      this.isEditing = true;
      this.onToggleEditing.emit(this.todo);
      // sorry for this hack :(
      setTimeout(() => this.todoItem.nativeElement.focus());
    }
  }

  cancelEditingTodo() {
    this.isEditing = false;
    this.onToggleEditing.emit();
    this.todoItem.nativeElement.value = this.todo.text;
  }

  updateTodo() {
    this.isEditing = false;
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

  deleteTodo() {
    this.onDelete.emit(this.todo);
  }

  onKeypress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.updateTodo();
    }
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (this.isEditing && changes.disabledEditing && changes.disabledEditing.currentValue) {
      this.cancelEditingTodo();
    }
  }
}
