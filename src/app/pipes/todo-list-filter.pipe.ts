import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../model/todo.model";

@Pipe({
  name: 'todoListFilter'
})
export class TodoListFilterPipe implements PipeTransform {

  transform(value: Todo[], filter: string = 'all'): any {
    console.log('pipe');
    if (filter === 'completed') {
      return value.filter(val => val.completed);
    }
    else if (filter === 'active') {
      return value.filter(val => !val.completed);
    }
    return value;
  }

}
