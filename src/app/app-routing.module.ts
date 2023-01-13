import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  {path:"" , component : UserInformationComponent },
  {path:"user-information" , component : UserInformationComponent },
  {path:"plan" , component : UserInformationComponent },
  {path:"user-information" , component : UserInformationComponent },
  {path:"user-information" , component : UserInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
