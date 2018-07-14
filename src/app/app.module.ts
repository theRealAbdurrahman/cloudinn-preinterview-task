import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortablejsModule } from "angular-sortablejs";
import { SwSearchResultsComponent } from './sw-search-results/sw-search-results.component';
import { SwSearchInputComponent } from './sw-search-input/sw-search-input.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SwSearchResultsComponent,
    SwSearchInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
