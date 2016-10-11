//entry point to the application
import { NgModule } from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';

// custom component import
import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [AppComponent],
    providers: [],
    bootstrap:[AppComponent]
})

export class AppModule  { }
