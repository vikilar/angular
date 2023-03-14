import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { AaaComponent } from './components/aaa/aaa.component';
import { BbbComponent } from './components/bbb/bbb.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    AaaComponent,
    BbbComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
