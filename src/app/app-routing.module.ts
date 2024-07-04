import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalListComponent } from './medical-list/medical-list.component';
import { MedicalDetailsComponent } from './medical-details/medical-details.component';
import { BuyComponent } from './buy/buy.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'' ,component: MedicalListComponent},
  {path: 'phone-details/:id', component: MedicalDetailsComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'display', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
