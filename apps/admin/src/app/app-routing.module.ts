import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routers: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routers, { initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
