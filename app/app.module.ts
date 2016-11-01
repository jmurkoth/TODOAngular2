// entry point to the application

// all the standard pieces
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// custom component import 
import {AppComponent} from './app.component';
import {HeaderComponent } from './shared/header.component';
import {FooterComponent} from './shared/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contactus/contact.component';
import {AllToDoComponent } from './todos/alltodos.component';
import {TodoComponent} from './todos/todo.component';

import {CustomToastrErrorHandler} from './common/customtoastr.errorhandler';
import {Logger} from './common/common.Logger';
import {ConsoleLogger} from './common/console.loggerservice';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule ],
    exports: [],
    declarations: [
        AppComponent, HeaderComponent,
        FooterComponent, HomeComponent,
        AboutComponent, ContactComponent,
        AllToDoComponent, TodoComponent],
    providers: [{provide: ErrorHandler, useClass: CustomToastrErrorHandler}, {provide: Logger, useClass: ConsoleLogger}],
    bootstrap: [AppComponent]
})

export class AppModule  { }
