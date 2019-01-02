import { Component, ViewChild } from '@angular/core';
import { FlexPanelComponent }   from './shared/flex-panel/flex-panel.component';
import { interval }             from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    get len() {
        if (this.panel)
            return this.panel.array.reduce((result, subArr) => result.concat(subArr)).length;
        else return 0;
    }

    get aliveLen() {
        if (this.panel)
            return this.panel.array.reduce((result, subArr) => result.concat(subArr)).filter(ceil => ceil.value === 1).length;
        else return 0;
    }

    isStart = false;
    private sub;
    num = 0;

    @ViewChild(FlexPanelComponent) panel: FlexPanelComponent;

    constructor() {
    }

    start() {
        this.isStart = true;
        this.sub = interval(10).subscribe(() => {
            this.update();
            this.num++;
        });
    }

    pause() {
        this.sub.unsubscribe();
        this.isStart = false;
    }

    update() {
        this.panel.update();
    }

    reset() {
        this.panel.reset();
    }

    clear() {
        this.panel.clear();
    }
}
