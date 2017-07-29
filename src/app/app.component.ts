import {Component, OnInit} from '@angular/core';
import {TodosService} from "./services/todos.service";
import {Todo} from "./model/todo.model";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  todos: Todo[];
  filter: 'all' | 'completed' | 'active' = 'all';
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos = this.todosService.todos;
  }

  applyFilter(filter) {
    this.filter = filter;
  }

  addTodo(todoText) {
    this.todos = this.todosService.addTodo(todoText);
  }

  deleteTodo(todo) {
    this.todos = this.todosService.deleteTodo(todo);
  }

  updateTodo(todo: Todo) {
    console.log(todo);
    this.todos = this.todosService.updateTodo(todo);
  }
}
