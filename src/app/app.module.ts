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
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { PostsComponent } from './pages/posts/posts.component';

// pages componentlerde apiden veri çekip sayfaları doldurmamız lazım bu sebeple Angular kendi httpclientModule kullanarak apiden veri çekme apiye veri gönderme işlemlerini yapabiliriz.
// @angular/common/http bu library üzerinden api ile haberleşebiliriz.
// reactjs de böyle hazır bir paket olmadığı için axios yada fecth api kullanıyorduk.

@NgModule({
  declarations: [AppComponent, HomeComponent, TodosComponent, PostsComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    BsModule,
    ServicesModule, // Pages sayfaları için bootrap kullanırız
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
