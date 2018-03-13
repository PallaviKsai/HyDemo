import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphService } from './dashboard.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing }  from './app.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    routing,
    ChartsModule
  ],
  providers: [GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
