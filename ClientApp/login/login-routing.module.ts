import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        // App Routing
        RouterModule.forChild(
            [
                {
                    path: '',
                    component: LoginComponent
                }
            ]
        )
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
