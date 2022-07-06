import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from 'src/components/paginator/paginator.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { PageComponent } from '../page/page.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    HeaderComponent,
    PageComponent,
    ContentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
