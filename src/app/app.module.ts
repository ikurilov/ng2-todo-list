import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodosService} from './services/todos.service';
import {FormsModule} from '@angular/forms';
import {TodoListFilterPipe} from './pipes/todo-list-filter.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoListFilterPipe,
    AutoFocusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
