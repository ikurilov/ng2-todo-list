import { Injectable } from '@angular/core';
import {Todo} from "../model/todo.model";

const TODO_LIST = [
  new Todo('tratata 1', false),
  new Todo('tratata 2', true)
];

@Injectable()
export class TodosService {
  public todos = TODO_LIST;

  constructor() { }

  addTodo(todoText: string) {
    let todos = this.todos.concat(new Todo(todoText));
    return this.todos = todos;
  }

  updateTodo(todo: Todo) {
    return this.todos = this.todos.map(item => {
      return item.id === todo.id ? todo : item;
    });
  }

  deleteTodo(todo: Todo) {
    return this.todos = this.todos.filter(val => val.id !== todo.id);
  }
}
