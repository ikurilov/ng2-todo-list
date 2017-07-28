import { Injectable } from '@angular/core';
import {TodoModel} from "../model/todo-model";

const TODO_LIST = [
  new TodoModel('tratata 1', false),
  new TodoModel('tratata 2', true)
];

@Injectable()
export class TodosService {
  public todos = TODO_LIST;

  constructor() { }

  addTodo(todoText: string) {
    let todos = this.todos.concat(new TodoModel(todoText));
    return this.todos = todos;
  }

  updateTodo(todo: TodoModel) {
    let todos = this.todos.slice(),
      idx = todos.indexOf(todo);
    todos[idx] = todo;
    return this.todos = todos;
  }

  deleteTodo(todo: TodoModel) {
    return this.todos = this.todos.filter(val => val !== todo);
  }
}
