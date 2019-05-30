import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { TransferHttpCacheModule } from '@nguniversal/common';
// i18n support
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AccordionModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './containers/home/home.component';
import { UsuarioComponent } from './containers/usuario/usuario.component';
import { RolComponent } from './containers/rol/rol.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { LinkService } from './shared/link.service';
import { UserService } from './shared/user.service';
import { RolService } from './shared/rol.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthGuard } from '../shared/auth/auth.guard';
import { AuthenticationService } from '../shared/auth/authentication.service';

export function createTranslateLoader(http: HttpClient, baseHref) {
  // Temporary Azure hack
  if (baseHref === null && typeof window !== 'undefined') {
    baseHref = window.location.origin;
  }
  // i18n files are in `wwwroot/assets/`
  return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AdminComponent,
    NavMenuComponent,
    HomeComponent,
    UsuarioComponent,
    RolComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    AdminRoutingModule
  ],
    providers: [LinkService, UserService, RolService, TranslateModule, AuthenticationService, AuthGuard],
})
export class AdminModule {}
