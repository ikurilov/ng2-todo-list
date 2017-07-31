import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.less'],
})
export class TodoFooterComponent implements OnInit {
  @HostBinding('class') hostClass = 'panel-footer';
  @Output() onFilter = new EventEmitter();
  @Output() onRemoveCompleted = new EventEmitter();
  @Output() onToggleAll = new EventEmitter();
  @Input() currentFilter;
  @Input() uncompleted: number;
  @Input() completed: number;
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

  removeCompleted() {
    this.onRemoveCompleted.emit();
  }

  toggleAll() {
    this.onToggleAll.emit(this.uncompleted > 0);
  }
}
