import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
    selector: `alai-button, button[alai-button]`,
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
    @Input() load = false;
    @Input() disabled!: boolean;

    constructor(private element: ElementRef<HTMLButtonElement>) {
        element.nativeElement.classList.add('btn');
    }

    ngOnChanges(): void {
        this.element.nativeElement.disabled = this.disabled || this.load;
    }

    get isDisable() {
        return this.element.nativeElement.disabled;
    }
}
