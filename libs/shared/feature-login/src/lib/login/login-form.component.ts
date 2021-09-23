import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'alai-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    loginForm: FormGroup;

    constructor(formBuild: FormBuilder) {
        this.loginForm = formBuild.group({
            email: ['', [Validators.required, Validators.email]],
            pass: ['', Validators.required],
        });
    }
}
