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
    let newTodos = this.todos.concat(new TodoModel(todoText));
    console.log(this.todos === newTodos);
    return this.todos = newTodos;
  }
}
