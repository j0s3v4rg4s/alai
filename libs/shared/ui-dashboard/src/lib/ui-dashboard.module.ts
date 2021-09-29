import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OptionComponent } from './option/option.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [DashboardComponent, ToolbarComponent, SidebarComponent, OptionComponent],
    exports: [DashboardComponent, ToolbarComponent, SidebarComponent, OptionComponent],
})
export class UiDashboardModule {}
