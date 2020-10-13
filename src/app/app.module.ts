import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes , RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import {HoverDirective} from './hover.directive';


const appRoutes: Routes = [
  {
    path : '', component: HomeComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'search' , component : SearchComponent
  },
  {
    path: 'hotels' , component: HotelsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
