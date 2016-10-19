//entry point to the application
import { NgModule } from '@angular/core';
import { BrowserModule  }   from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// custom component import
import {AppComponent} from './app.component';
import {HeaderComponent } from './shared/header.component';
import {FooterComponent} from './shared/footer.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    exports: [],
    declarations: [AppComponent, HeaderComponent,FooterComponent],
    providers: [],
    bootstrap:[AppComponent]
})

export class AppModule  { }
