import { Component, OnInit } from '@angular/core';
import { IRol } from '../../models/Rol';
import { RolService } from '../../shared/rol.service';

@Component({
    selector: 'app-rol',
    templateUrl: './rol.component.html'
})
export class RolComponent implements OnInit {
  roles: IRol[];
  selectedRol: IRol;

  // Use "constructor"s only for dependency injection
  constructor(private rolService: RolService) {}

  // Here you want to handle anything with @Input()'s @Output()'s
  // Data retrieval / etc - this is when the Component is "ready" and wired up
  ngOnInit() {
    this.rolService.getRoles().subscribe(result => {
      console.log('HttpClient [GET] /api/roles/allresult', result);
      this.roles = result;
    });
  }

  onSelect(rol: IRol): void {
    this.selectedRol = rol;
  }

  deleteRol(rol) {
    this.clearRol();
    this.rolService.deleteRol(rol).subscribe(
      result => {
        console.log('Delete rol result: ', result);
        let position = this.roles.indexOf(rol);
        this.roles.splice(position, 1);
      },
      error => {
        console.log(`There was an issue. ${error._body}.`);
      }
    );
  }

  onUserUpdate(rol: IRol) {
    this.roles[this.roles.findIndex(u => u.id == rol.id)] = rol;
  }

  addRol(newUserName) {
    this.rolService.addRol(newUserName).subscribe(
      result => {
        console.log('Post rol result: ', result);
        this.roles.push(result);
        this.selectedRol = result;
      },
      error => {
        console.log(`There was an issue. ${error._body}.`);
      }
    );
  }

  clearRol() {
    if (this.selectedRol) {
      this.selectedRol = null;
    }
  }
}
