import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(route), ReactiveFormsModule],
    declarations: [LoginComponent],
})
export class FeatureLoginModule {}
