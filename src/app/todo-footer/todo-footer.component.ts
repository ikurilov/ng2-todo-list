import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.less'],
  host: {'class':'panel-footer'}
})
export class TodoFooterComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  @Output() onDeleteCompleted = new EventEmitter();
  @Output() onCompleteAll = new EventEmitter();
  @Input() currentFilter;
  filters = [
    {
      title: 'All',
      value: 'all'
    },
    {
      title: 'Active',
      value: 'active'
    },
    {
      title: 'Completed',
      value: 'completed'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  apply(filter) {
    this.onFilter.emit(filter);
  }

  deleteCompleted() {
    this.onDeleteCompleted.emit();
  }

  completeAll() {
    this.onCompleteAll.emit();
  }
}
