/**
 * Created by kkcra on 2019/1/1
 */
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
}                from '@angular/core';
import { pixel } from '../game-life.const';

@Component({
    selector: 'bw-block',
    template: `
        <div [ngStyle]="style" [style.backgroundColor]='color' (click)="click()">
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BwBlockComponent implements OnChanges {
    @Input() value: 0 | 1;
    @Output() valueChange = new EventEmitter();
    readonly style = {
        'width': pixel + 'px',
        'height': pixel + 'px',
        'border': '1px solid #9e9e9e',
    };
    color: '#fff' | '#000' = '#fff';

    constructor() { }

    setColor(value: 0 | 1) {
        if (value === 1) this.color = '#000';
        else if (value === 0) this.color = '#fff';
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setColor(this.value);
    }

    click() {
        if (this.value === 0) {
            this.value = 1;
        } else {
            this.value = 0;
        }
        this.setColor(this.value);
        this.valueChange.emit(this.value);
    }
}
