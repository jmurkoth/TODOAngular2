import { Component, OnInit } from '@angular/core';
import {ITodoItem} from './ITodoItem';

@Component({
    moduleId: module.id,
    selector: 'app-todo-all',
    templateUrl: 'alltodos.component.html'
})
export class AllToDoComponent implements OnInit {
   public AllTodos: ITodoItem[];
    constructor() { }

    ngOnInit() {
    this.AllTodos = [
        {
            Id: '1',
            Title: 'My First Todo',
            Description: 'My first todo desc' ,
            IsComplete: false,
            CreatedBy: 'jmurkoth',
            CreatedDate: new Date('10/10/2016'),
            UpdatedBy: 'jmurkoth',
            UpdatedDate:  new Date('10/10/2016')
        },
         {
            Id: '2',
            Title: 'My 2nd Todo',
            Description: 'My 2nd todo desc' ,
            IsComplete: false,
            CreatedBy: 'jmurkoth',
            CreatedDate: new Date('10/10/2016'),
            UpdatedBy: 'jmurkoth',
            UpdatedDate:  new Date('10/10/2016')
        },
         {
            Id: '3',
            Title: 'My 3rd Todo',
            Description: 'My 3rd todo desc' ,
            IsComplete: false,
            CreatedBy: 'jmurkoth',
            CreatedDate: new Date('10/10/2016'),
            UpdatedBy: 'jmurkoth',
            UpdatedDate:  new Date('10/10/2016')
        },
         {
            Id: '4',
            Title: 'My 4th Todo',
            Description: 'My 3rd todo desc' ,
            IsComplete: false,
            CreatedBy: 'jmurkoth',
            CreatedDate: new Date('10/10/2016'),
            UpdatedBy: 'jmurkoth',
            UpdatedDate:  new Date('10/10/2016')
        }
    ];
    }
}
