import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine/tokens';
import { PrebootModule } from 'preboot';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LinkService } from './shared/link.service';

export function getOriginUrl() {
  return window.location.origin;
}

export function getRequest() {
  // the Request object only lives on the server
  return { cookie: document.cookie };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LinkService, TranslateModule],
})
export class AppModule {}
