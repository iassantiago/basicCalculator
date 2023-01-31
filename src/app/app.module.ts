import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiComponent } from './components/multi/multi.component';
import { RestaComponent } from './components/resta/resta.component';
import { DiviComponent } from './components/divi/divi.component';
import { SumaComponent } from './components/suma/suma.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MultiComponent,
    RestaComponent,
    DiviComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
