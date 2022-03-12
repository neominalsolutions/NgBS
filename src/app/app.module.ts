import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsModule } from './components/bs.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
// ngx-dropdown module import ettik.

@NgModule({
  declarations: [AppComponent, HomeComponent, TodosComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    BsModule, // Pages sayfaları için bootrap kullanırız
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
