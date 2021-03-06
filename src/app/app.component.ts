import {Component} from '@angular/core';
import {TodosService} from './services/todos.service';
import {Todo} from './model/todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  filter: 'all' | 'completed' | 'active' = 'all';

  constructor(public todosService: TodosService) {
  }

  applyFilter(filter) {
    if (this.filter !== filter) {
      this.filter = filter;
    }
  }

  addTodo(todoText) {
    this.todosService.addTodo(todoText);
  }

  deleteTodo(todo) {
    this.todosService.deleteTodo(todo);
  }

  updateTodo(todo: Todo) {
    this.todosService.updateTodo(todo);
  }

  toggleAllTodo(complete) {
    this.todosService.toggleAll(complete);
  }

  removeCompleted() {
    this.todosService.removeCompleted();
  }
}
