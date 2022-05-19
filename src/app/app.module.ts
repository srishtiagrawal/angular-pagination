import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PicsumComponent } from './picsum/picsum.component';
import { AppRoutingModule } from './app-routing.module';
import {PicsumService} from './picsum.service'
import { HttpClientModule } from '@angular/common/http';
import { PaginationDirective } from './directives/pagination.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, PaginationDirective,PicsumComponent],
  providers: [PicsumService],
  bootstrap: [AppComponent],
})
export class AppModule {}
