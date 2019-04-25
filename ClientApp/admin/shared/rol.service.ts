import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { IRol } from '../models/Rol';

@Injectable()
export class RolService {
  private baseUrl: string;

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  getRoles() {
    return this.http.get<IRol[]>(`${this.baseUrl}/api/roles`);
  }

  getRol(rol: IRol) {
    return this.http.get<IRol>(`${this.baseUrl}/api/roles/` + rol.id);
  }

  deleteRol(rol: IRol) {
    return this.http.delete<IRol>(`${this.baseUrl}/api/roles/` + rol.id);
  }

  updateRol(rol: IRol) {
    return this.http.put<IRol>(`${this.baseUrl}/api/roles/` + rol.id, rol);
  }

  addRol(newUserName: string) {
    return this.http.post<IRol>(`${this.baseUrl}/api/roles`, {
      name: newUserName
    });
  }
}
