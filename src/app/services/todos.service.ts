import {Injectable} from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable()
export class TodosService {
  public todos;
  public completed: number;
  public uncompleted: number;

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.updateCounters();
  }

  addTodo(todoText: string) {
    this.todos = this.todos.concat(new Todo(todoText));
    this.afterUpdate();
  }

  updateTodo(todo: Todo) {
    this.todos = this.todos.map(item => {
      return item.id === todo.id ? todo : item;
    });
    this.afterUpdate();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(val => val.id !== todo.id);
    this.afterUpdate();
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
    this.afterUpdate();
  }

  removeCompleted() {
    this.todos = this.todos.filter(item => !item.completed);
    this.afterUpdate();
  }

  afterUpdate() {
    this.writeToStorage();
  }

  writeToStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.updateCounters();
  }

  updateCounters() {
    this.completed = this.todos.filter(item => item.completed).length;
    this.uncompleted = this.todos.length - this.completed;
  }
}
