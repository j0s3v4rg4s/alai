import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiGeneralModule } from '@alai/shared/ui-general';

import { CommerceRoutingModule } from './commerce-routing.module';
import { CommerceComponent } from './commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';

@NgModule({
    declarations: [CommerceComponent, NewCommerceComponent],
    imports: [CommonModule, CommerceRoutingModule, UiGeneralModule],
})
export class CommerceModule {}
