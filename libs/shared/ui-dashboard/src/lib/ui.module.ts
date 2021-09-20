import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, ToolbarComponent, SidebarComponent],
  exports: [DashboardComponent, ToolbarComponent, SidebarComponent],
})
export class UiModule {}
