import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    LeafletModule
  ],
  declarations: [],
  exports: [AppComponent],
})
export class AppModule {}