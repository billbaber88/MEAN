import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WeightComponent } from './weight/weight.component';
import { MercuryComponent } from './weight/mercury/mercury.component';
import { VenusComponent } from './weight/venus/venus.component';
import { MarsComponent } from './weight/mars/mars.component';
import { JupiterComponent } from './weight/jupiter/jupiter.component';
import { SaturnComponent } from './weight/saturn/saturn.component';
import { UranusComponent } from './weight/uranus/uranus.component';
import { NeptuneComponent } from './weight/neptune/neptune.component';
import { PlutoComponent } from './weight/pluto/pluto.component';


@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    MercuryComponent,
    VenusComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    UranusComponent,
    NeptuneComponent,
    PlutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
