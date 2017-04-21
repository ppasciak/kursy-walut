import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdSelectModule, MdInputModule, MdToolbarModule, MdCardModule, MdTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { KursComponent } from './kurs/kurs.component';
import { WymianaComponent } from './wymiana/wymiana.component';
import { DaneService } from './dane.service';
import { MapToIterable } from './map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KursComponent,
    WymianaComponent,
    MapToIterable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [DaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
