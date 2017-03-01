import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {contactRoutes} from './contactus/contact.routes';
import {aboutRoutes} from './about/about.routes';
// Array of all the routes of the application

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), aboutRoutes, contactRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule {}


