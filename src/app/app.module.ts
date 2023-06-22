import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupnameComponent } from './groupname/groupname.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { GupdateComponent } from './gupdate/gupdate.component';
import { CupdateComponent } from './cupdate/cupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupnameComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    GrouplistComponent,
    GupdateComponent,
    CupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
