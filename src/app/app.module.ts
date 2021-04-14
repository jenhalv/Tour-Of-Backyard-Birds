import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BirdsComponent } from './birds/birds.component';
import { BirdDetailsComponent } from './birds/bird-details/bird-details.component';
import { BirdSearchComponent } from './birds/bird-search/bird-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BirdService } from './birds/bird.service';
import { InMemoryDataService } from './birds/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BirdSearchComponent,
    BirdsComponent,
    BirdDetailsComponent,
    BirdsComponent,
    BirdDetailsComponent,
    BirdSearchComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  providers: [BirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
