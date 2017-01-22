import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
    { path: 'contact', component: ContactComponent }
];

export const ContactRoutes = RouterModule.forChild(routes);