import { Component, Input } from '@angular/core';

@Component({
    selector: 'alai-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss'],
})
export class OptionComponent {
    @Input() href!: string;
}
