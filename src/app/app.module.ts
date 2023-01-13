import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { SelectionComponent } from './selection/selection.component';
import { PickAddComponent } from './pick-add/pick-add.component';
import { FinishingComponent } from './finishing/finishing.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    UserInformationComponent,
    FooterComponent,
    ContainerComponent,
    SelectionComponent,
    PickAddComponent,
    FinishingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
