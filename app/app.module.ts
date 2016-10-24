// entry point to the application
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// custom component import
import {AppComponent} from './app.component';
import {HeaderComponent } from './shared/header.component';
import {FooterComponent} from './shared/footer.component';
import {HomeComponent} from './home/home.component';

import {CustomToastrErrorHandler} from './common/customtoastr.errorhandler';
import {Logger} from './common/common.Logger';
import {ConsoleLogger} from './common/console.loggerservice';

@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [],
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
    providers: [{provide: ErrorHandler, useClass: CustomToastrErrorHandler}, {provide: Logger, useClass: ConsoleLogger}],
    bootstrap: [AppComponent]
})

export class AppModule  { }
