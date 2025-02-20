import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    // CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }