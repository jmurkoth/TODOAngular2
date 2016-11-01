import { Component, OnInit, Input } from '@angular/core';
import {ITodoItem} from './ITodoItem';

@Component({
    moduleId: module.id,
    selector: '[app-todo]',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
    @Input() Todo: ITodoItem;
    constructor() { }

    ngOnInit() { }
}
