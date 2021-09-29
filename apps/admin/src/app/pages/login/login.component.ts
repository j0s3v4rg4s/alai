import { Component, Optional } from '@angular/core';
import { User, signOut, Auth } from '@angular/fire/auth';

import { AuthRole } from '@alai/shared/feature-login';
import { Router } from "@angular/router";

@Component({
    selector: 'alai-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    errorMessage = '';

    constructor(@Optional() private auth: Auth, private router: Router) {}

    async loginUser(user: User) {
        const token = await user.getIdTokenResult();
        if (token.claims.role !== AuthRole.ADMIN) {
            signOut(this.auth);
            this.errorMessage = 'No tienes permisos para acceder'
        } else {
            this.router.navigate(['/dashboard'])
        }
    }
}
