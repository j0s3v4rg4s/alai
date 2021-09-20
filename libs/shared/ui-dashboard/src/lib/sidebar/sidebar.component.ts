import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'alai-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('root') private root!: ElementRef<HTMLDivElement>;
  isOpen = false;

  toggle() {
    this.root.nativeElement.classList.toggle('-translate-x-full');
    this.isOpen = !this.isOpen;
  }

  close() {
    this.root.nativeElement.classList.add('-translate-x-full');
    this.isOpen = false;
  }

  @HostListener('click', ['$event.target'])
  clickEvent(element: Element) {
    const insideRoot = this.root.nativeElement.contains(element);
    if (!insideRoot) {
      this.close();
    }
    if (element.tagName === 'A') {
      this.close();
    }
  }
}
