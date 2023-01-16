import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './user-information/user-information.component';
import { SelectionComponent } from './selection/selection.component';
import { PickAddComponent } from './pick-add/pick-add.component';
import { FinishingComponent } from './finishing/finishing.component';


const routes: Routes = [
  { path: "", redirectTo: "user-information", pathMatch: "full" },
  {path: "user-information", component: UserInformationComponent},
  {path: "selection-plan", component: SelectionComponent},
  {path: "pick-add-ons", component: PickAddComponent},
  { path: "finishing-up", component: FinishingComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

