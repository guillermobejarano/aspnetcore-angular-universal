import {
  Component,
  Injector,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { REQUEST } from '@nguniversal/aspnetcore-engine/tokens';
// i18n support
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AuthenticationService } from '../shared/auth/authentication.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  // This will go at the END of your title for example "Home - Angular Universal..." <-- after the dash (-)
  private endPageTitle: string = 'Angular Universal and ASP.NET Core Starter';
  // If no Title is provided, we'll use a default one before the dash(-)
  private defaultPageTitle: string = 'My App';

  private routerSub$: Subscription;
  private request;

  model: any = {};
  loading = false;
  returnUrl: string;
  wrongPassword: boolean;

  constructor(
    private router: Router,
    private injector: Injector,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    // Change "Title" on every navigationEnd event
    // Titles come from the data.title property on all Routes (see app.routes.ts)
    //this._changeTitleOnNavigation();
  }

  ngOnDestroy() {
    // Subscription clean-up
    //this.routerSub$.unsubscribe();
  }

  login() {
    console.log(this.model);
    this.loading = true;
      this.authService.login(this.model.name, this.model.password)
          .subscribe(data => {
              this.wrongPassword = false;
              //this.router.navigate([this.returnUrl]);
          },
              error => {
                  this.wrongPassword = true;
                  this.loading = false;
              });
  }
}
