import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCard, MatList, MatListItem, MatCardContent, MatCardTitle, MatCardImage, MatCardSubtitle, MatListModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainListComponent } from './main-list/main-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
