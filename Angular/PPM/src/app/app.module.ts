import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    NewComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
