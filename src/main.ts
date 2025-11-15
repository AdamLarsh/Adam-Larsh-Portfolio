import {provideRouter, Routes} from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';
import {App} from './app/app';
import {AboutMePage} from './app/about-me-page/about-me-page';
import {Projects} from './app/projects/projects';
import {ContactMe} from './app/contact-me/contact-me';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AboutMePage},
  {path: 'projects', component: Projects},
  {path: 'contact-me', component: ContactMe}
]

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),]
}).catch((err) => console.error(err));
