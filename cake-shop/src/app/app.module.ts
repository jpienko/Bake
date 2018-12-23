import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MatDialogModule, MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatGridListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainListComponent } from './main-list/main-list.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AddCakeComponent } from './add-cake/add-cake.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputCounterModule } from 'ng4-input-counter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainListComponent,
    AddCakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatInputModule,
    InputCounterModule.forRoot(),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCakeComponent,
],
})
export class AppModule { }
