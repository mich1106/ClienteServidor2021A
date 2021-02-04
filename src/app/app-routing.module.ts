import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeshboardComponent } from './pages/deshboard/deshboard.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

/*
http://localhost:4200
*/

const routes: Routes = [
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'deshboard', component: DeshboardComponent},
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '', pathMatch: 'full', redirectTo: '/home' },
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
