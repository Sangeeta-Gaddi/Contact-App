import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupnameComponent } from './groupname/groupname.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { CupdateComponent } from './cupdate/cupdate.component';
import { GupdateComponent } from './gupdate/gupdate.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'groupname',component:GroupnameComponent},
  {path:'contact',component:ContactComponent},
  {path:'grouplist/:item',component:GrouplistComponent},
  {path:'cupdate/:id',component:CupdateComponent},
  {path:'gupdate/:id',component:GupdateComponent},
  {path:'',redirectTo:'groupname',pathMatch:'full'},
  {path:'',redirectTo:'contact',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
