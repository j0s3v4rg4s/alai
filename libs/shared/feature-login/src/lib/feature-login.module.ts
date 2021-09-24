import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';

import { UiGeneralModule } from '@alai/shared/ui-general';

import { LoginFormComponent } from './login/login-form.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, MatRippleModule, UiGeneralModule],
    declarations: [LoginFormComponent],
    exports: [LoginFormComponent],
})
export class FeatureLoginModule {}
