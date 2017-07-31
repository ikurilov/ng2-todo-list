import {
  ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild
} from '@angular/core';
import {Todo} from '../model/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @ViewChild('todoitem') todoItem;
  @HostBinding('class') hostClass = 'list-group-item';
  @Input() todo: Todo;
  isEditing: boolean;


  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onToggleEditing = new EventEmitter();

  constructor(public el: ElementRef) {
  }

  startEditingTodo() {
    this.isEditing = true;
    // sorry for this hack :(
    // setTimeout(() => this.todoItem.nativeElement.focus());
  }

  cancelEditingTodo() {
    this.isEditing = false;
    this.onToggleEditing.emit();
    this.todoItem.nativeElement.value = this.todo.text;
  }

  updateTodo() {
    this.isEditing = false;
    this.onToggleEditing.emit();
    const newTodo = {...this.todo};
    newTodo.text = this.todoItem.nativeElement.value;
    this.onEdit.emit(newTodo);
  }

  toggleTodo() {
    const updated = {...this.todo};
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

  setCurrentTodo() {
    this.onToggleEditing.emit(this.todo);
  }
}
