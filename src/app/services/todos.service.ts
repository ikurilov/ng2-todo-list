import {Injectable} from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable()
export class TodosService {
  public todos;

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  writeToStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todoText: string) {
    this.todos = this.todos.concat(new Todo(todoText));
    this.writeToStorage()
  }

  updateTodo(todo: Todo) {
    this.todos = this.todos.map(item => {
      return item.id === todo.id ? todo : item;
    });
    this.writeToStorage();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(val => val.id !== todo.id);
    this.writeToStorage();
  }

  toggleAll(complete) {
    this.todos = this.todos.map(val => {
      if (complete && !val.completed) {
        return {...val, completed: true};
      }
      else if (!complete && val.completed) {
        return {...val, completed: false};
      }
      return val;
    });
    this.writeToStorage();
  }

  removeCompleted() {
    this.todos = this.todos.filter(item => !item.completed);
    this.writeToStorage();
  }
}
