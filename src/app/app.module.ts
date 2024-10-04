import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { ModalComponent } from './modal/modal.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RulesComponent,
    PetListComponent,
    PetCardComponent,
    ModalComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
