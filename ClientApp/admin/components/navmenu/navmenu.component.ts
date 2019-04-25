import { Component } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'admin-nav-menu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})

export class NavMenuComponent {
    parentMenuSelected: MenuItem;
    childMenuSelected: MenuItem;

    public get items(): MenuItem[] {
        return this.generarMenu();
    }

    public toggleClass(item: MenuItem) {
        item.active = !item.active;
        this.parentMenuSelected = item;
    }

    public toggleChild(child: MenuItem) {
        child.active = !child.active;
        this.childMenuSelected = child;
    }

    generarMenu() {
        // or if you make it an array
        var arr: MenuItem[] = [
            {
                name: 'Usuarios',
                active: false,
                icon: 'fa fa-users',
                routerLink: 's',
                childs: [
                    {
                        name: 'Usuarios', active: false, icon: '', routerLink: '/admin/user', childs: []
                    },
                    {
                        name: 'Roles', active: false, icon: '', routerLink: '/rol', childs: []
                    },
                    {
                        name: 'Permisos', active: false, icon: '', routerLink: '/permiso', childs: []
                    }
                ]
            }
        ];
        return arr;
    }
}
