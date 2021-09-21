import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'alai-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(formBuild: FormBuilder) {
        this.loginForm = formBuild.group({
            email: ['', [Validators.required, Validators.email]],
            pass: ['', Validators.required],
        });
    }
}
