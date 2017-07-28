import {Component, OnInit} from '@angular/core';
import {TodosService} from "./services/todos.service";
import {TodoModel} from "./model/todo-model";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  todos: TodoModel[];
  filter: 'all' | 'completed' | 'active' = 'active';
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
}
