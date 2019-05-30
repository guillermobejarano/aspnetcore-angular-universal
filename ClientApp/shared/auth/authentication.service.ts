import { HttpClient, HttpResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private baseUrl: string

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/api/auth/authenticate`, { name: username, password: password });
  }
  authenticated(): Observable<boolean> {
    return this.http.get(`${this.baseUrl}/api/auth/authenticate`, this.jwt())
      .pipe(map(() => true));
      //.catch(() => {
      //  this.logout();
      //  return of(false);
      //}));
  }

  checkAccess(): boolean {
    try {
      let user = localStorage.getItem('currentUser');

      if (user === undefined || user === null) {
        return (false);
      }
      else {
        return (true);
      }
    }
    catch (e)
    { }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  private jwt() {
    try {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token });
        return new HttpHeaderResponse({ headers: headers });
      }
    }
    catch (e)
    { }
  }

  private handleError(error: any): Promise<any> {
    this.logout();
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
