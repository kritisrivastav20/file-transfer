import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { File } from '@awesome-cordova-plugins/file/ngx/index';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [FileTransfer, File, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
