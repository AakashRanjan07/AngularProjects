import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalListComponent } from './medical-list/medical-list.component';
import { MedicalDetailsComponent } from './medical-details/medical-details.component';
import { BuyComponent } from './buy/buy.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalListComponent,
    MedicalDetailsComponent,
    BuyComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
