// entry point to the application
// We use this to change angular 2 to use the the classic hash strategy
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
// all the standard pieces
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// custom component import
import {AppComponent} from './app.component';
import {HeaderComponent } from './shared/header.component';
import {FooterComponent} from './shared/footer.component';

import {CustomToastrErrorHandler} from './common/customtoastr.errorhandler';
import {Logger} from './common/common.Logger';
import {ConsoleLogger} from './common/console.loggerservice';
// Routes
import {AppRoutingModule} from './app.routing.module';

// Modules
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contactus/contact.module';
import {HomeModule} from './home/home.module';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule,  ToastModule , AboutModule, ContactModule, HomeModule ],
    exports: [],
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    providers: [{provide: ErrorHandler, useClass: CustomToastrErrorHandler}, {provide: Logger, useClass: ConsoleLogger},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})

export class AppModule  { }
