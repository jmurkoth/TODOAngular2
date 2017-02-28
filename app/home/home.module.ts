import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomeComponent }   from './home.component';
import {AllToDoComponent } from './../todos/alltodos.component';
import { AlertModule } from './../common/alert/alert.module';
import {TodoComponent} from './../todos/todo.component';
@NgModule({
    imports: [CommonModule, AlertModule],
    declarations: [HomeComponent, AllToDoComponent, TodoComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
