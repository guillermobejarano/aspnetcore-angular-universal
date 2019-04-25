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
import { AppComponent } from './app.component';


export function createTranslateLoader(http: HttpClient, baseHref) {
  // Temporary Azure hack
  if (baseHref === null && typeof window !== 'undefined') {
    baseHref = window.location.origin;
  }
  // i18n files are in `wwwroot/assets/`
  return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    CommonModule,
    
    // App Routing
    RouterModule.forChild(
      [
        {
          path: 'home',
          component: AppComponent//,
        //  children: [ {
        //      path: 'home',
        //      component: HomeComponent,

        //      // *** SEO Magic ***
        //      // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
        //      // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
        //      // When you change Routes it will automatically append these to your document for you on the Server-side
        //      //  - check out app.component.ts to see how it's doing this
        //      data: {
        //    title: 'Homepage',
        //    meta: [
        //      {
        //        name: 'description',
        //        content: 'This is an example Description Meta tag!'
        //      }
        //    ],
        //    links: [
        //      { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
        //      {
        //        rel: 'alternate',
        //        hreflang: 'es',
        //        href: 'http://es.example.com/'
        //      }
        //    ]
        //  }
        //}] 
            }       
      ])
  ],
  //providers: [LinkService, UserService, RolService, PermisoService, TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
