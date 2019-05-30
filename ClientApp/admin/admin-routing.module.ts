import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { HomeComponent } from './containers/home/home.component';
import { UsuarioComponent } from './containers/usuario/usuario.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../shared/auth/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        // App Routing
        RouterModule.forChild(
            [
                {
                    path: '',
                    component: AdminComponent,
                    //canActivateChild: [AuthGuard],
                    children: [{
                        path: 'home',
                        component: HomeComponent
                    },
                    {
                        path: "user",
                        component: UsuarioComponent,
                        canActivate: [AuthGuard]
                    },
                    {
                        path: '**',
                        component: NotFoundComponent
                    }]
                }
            ]
        )
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
