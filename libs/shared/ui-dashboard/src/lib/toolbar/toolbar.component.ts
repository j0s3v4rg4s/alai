import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'alai-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleMenu = new EventEmitter<void>();

  clickMenu() {
    this.toggleMenu.emit();
  }
}
