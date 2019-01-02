/**
 * Created by kkcra on 2019/1/1
 */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { randomInt }                                               from '../../util/random.util';
import { pixel }                                                   from './game-life.const';
import { updateGame }                                              from './game-life.util';
import { Ceil }                                                    from './ceil';

const gameUpdate = 'game update';

@Component({
    selector: 'flex-panel',
    templateUrl: './flex-panel.component.html',
    styleUrls: ['./flex-panel.component.css'],
})
export class FlexPanelComponent implements OnInit, AfterViewInit {
    @ViewChild('panel') panel: ElementRef<HTMLDivElement>;
    rowSize = 80;
    colSize = 0;
    array: Array<Array<Ceil>> = [];

    constructor() {
    }

    ngOnInit() {
        this.init();
    }

    ngAfterViewInit(): void {
        this.random(1000);
    }

    init() {
        this.colSize = parseInt((this.panel.nativeElement.offsetWidth / (pixel + 2)) + '');
        for (let i = 0; i < this.rowSize; i++) {
            this.array.push(new Array(this.colSize).fill(0).map(() => new Ceil()));
        }
    }

    random(len: number) {
        for (let i = 0; i < len; i++) {
            const rRan = randomInt(0, this.rowSize);
            const cRan = randomInt(0, this.colSize);
            this.array[rRan][cRan].value = 1;
        }
    }

    update() {
        console.time(gameUpdate);
        updateGame(this.array);
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                const ceil = this.array[i][j];
                ceil.value = ceil.calculateValue;
                ceil.calculateValue = null;
            }
        }
        console.timeEnd(gameUpdate);
    }

    reset() {
        this.clear();
        this.random(1000);
    }

    clear() {
        this.array.reduce((a, v) => a.concat(v)).forEach(c => c.value = 0);
    }
}
