import { Component, Optional } from '@angular/core';
import { User, signOut, Auth } from '@angular/fire/auth';

import { AuthRole } from '@alai/shared/feature-login';

@Component({
    selector: 'alai-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    errorMessage = '';

    constructor(@Optional() private auth: Auth) {}

    async loginUser(user: User) {
        const token = await user.getIdTokenResult();
        if (token.claims.role !== AuthRole.ADMIN) {
            signOut(this.auth);
            this.errorMessage = 'No tienes permisos para acceder'
        }
    }
}
