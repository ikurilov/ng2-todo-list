import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodosService} from "./services/todos.service";
import {FormsModule} from "@angular/forms";
import {TodoListFilterPipe} from './pipes/todo-list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoListFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
