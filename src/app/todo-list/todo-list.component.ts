import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input,
  Output, QueryList, ViewChildren
} from '@angular/core';
import {Todo} from "../model/todo.model";
import {TodoComponent} from "../todo/todo.component";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
  host: {'class': 'list-group'},
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flyInOut', [
      //state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class TodoListComponent {
  @Input() todos: any[];
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @ViewChildren(TodoComponent) todoComponents: QueryList<TodoComponent>;
  currentEditingTodo: Todo;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.currentEditingTodo) {
      let todoElement = this.todoComponents.find(comp => comp.todo.id === this.currentEditingTodo.id).el.nativeElement,
        todoListElement = this.el.nativeElement,
        todoOffsetTop = todoElement.offsetTop,
        todoOffsetHeight = todoElement.offsetHeight,
        todoListScrollTop = todoListElement.scrollTop,
        todoListHeight = todoListElement.offsetHeight,
        newScrollTop = todoOffsetTop - (todoListHeight/2) + (todoOffsetHeight/2);
      if (todoListScrollTop > todoOffsetTop) {
        todoListElement.scrollTop = newScrollTop;
      }
      else if (todoListScrollTop + todoListHeight < todoOffsetTop + todoOffsetHeight) {
        todoListElement.scrollTop = newScrollTop;
      }
    }
  }

  constructor(private el: ElementRef) {
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

  trackByTodos(idx: number, todo: Todo): string { return todo.id; }
}
