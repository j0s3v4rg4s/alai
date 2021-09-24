import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MatRippleModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
    imports: [CommonModule, MatRippleModule, MatProgressSpinnerModule, MatProgressBarModule],
    declarations: [ButtonComponent],
    exports: [ButtonComponent],
})
export class UiGeneralModule {}
