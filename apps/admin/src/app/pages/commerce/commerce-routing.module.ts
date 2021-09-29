import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommerceComponent } from './commerce.component';
import { NewCommerceComponent } from 'admin/app/pages/commerce/new-commerce/new-commerce.component';

const routes: Routes = [
    { path: '', component: CommerceComponent },
    { path: 'new', component: NewCommerceComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CommerceRoutingModule {}
