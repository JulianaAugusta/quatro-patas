import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'pets', component: PetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
