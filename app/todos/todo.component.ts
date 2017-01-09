import { Component, OnInit, Input } from '@angular/core';
import {ITodoItem} from './ITodoItem';
import { Logger } from '../common/common.Logger';
 /* tslint:disable:component-selector-name component-selector-type */
@Component({
    moduleId: module.id,
    selector: '[app-todo]',
    templateUrl: 'todo.component.html'
})
 /* tslint:disable:component-selector-name  component-selector-type */
export class TodoComponent implements OnInit {
    @Input() Todo: ITodoItem;
    constructor(public logger: Logger) {
    }

    ngOnInit() { }

    onDelete() {
      this.logger.info(`delete clicked for ${this.Todo.Id}`);
    }
    onMarkComplete() {
        this.logger.info(`Mark complete clicked for ${this.Todo.Id}`);
    }
    onEdit() {
          this.logger.info(`Edit clicked for ${this.Todo.Id}`);
    }
}
