import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserService } from './user.service';
import { ProfileService } from './profile.service';
import { AuthGard } from './auth-gard';

@NgModule({
  declarations: [
    AppComponent,
    LoggedInComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, ProfileService, AuthGard],
  bootstrap: [AppComponent]
})
export class AppModule { }
