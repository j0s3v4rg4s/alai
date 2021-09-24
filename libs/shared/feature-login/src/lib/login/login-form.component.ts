import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, User, signInWithEmailAndPassword } from '@angular/fire/auth';
import { fireCode } from '@alai/shared/utility';

@Component({
    selector: 'alai-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    @Input() errorMsg!: string;
    @Output() user = new EventEmitter<User>();
    loginForm: FormGroup;
    load = false;

    constructor(formBuild: FormBuilder, @Optional() private auth: Auth) {
        this.loginForm = formBuild.group({
            email: ['', [Validators.required, Validators.email]],
            pass: ['', Validators.required],
        });
    }

    async login() {
        this.errorMsg = '';
        this.load = true;
        const { email, pass } = this.loginForm.value;
        try {
            const credential = await signInWithEmailAndPassword(this.auth, email, pass);
            this.user.emit(credential.user);
        } catch (e) {
            setTimeout(() => {
                this.load = false;
                this.errorMsg = fireCode(e.code, 'No se pudo validar la información');
            }, 2000);
        }
    }
}
