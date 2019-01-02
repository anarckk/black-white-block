/**
 * Created by kkcra on 2019/1/1
 */
import { AfterViewInit, Component, ElementRef, Host, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BwBlockComponent }                                                                       from './bw-block/bw-block.component';
import { FlexPanelService }                                                                       from './flex-panel.service';
import { randomInt }                                                                              from '../../util/random.util';

@Component({
  selector: 'flex-panel',
  templateUrl: './flex-panel.component.html',
  styleUrls: ['./flex-panel.component.css'],
  providers: [
    FlexPanelService,
  ]
})
export class FlexPanelComponent implements OnInit, AfterViewInit {
  @ViewChild('panel') panel: ElementRef<HTMLDivElement>;
  @ViewChildren(BwBlockComponent) blocks: QueryList<BwBlockComponent>;
  arr = [];
  rowArr = new Array(100).fill(0);
  rowSize: number;
  colSize: number;

  constructor(
    @Host() private panelSer: FlexPanelService,
  ) { }

  ngOnInit() {
    const len = parseInt((this.panel.nativeElement.offsetWidth / 7) + '');
    this.arr = new Array(len).fill(0);
  }

  ngAfterViewInit(): void {
    this.panelSer.blocks = this.blocks;
    this.rowSize = this.rowArr.length;
    this.colSize = this.arr.length;
    this.random(1000);
  }

  random(len: number) {
    for (let i = 0; i < len; i++) {
      const rRan = randomInt(0, this.rowSize);
      const cRan = randomInt(0, this.colSize);
      const comp = this.panelSer.get(rRan, cRan);
      comp.setColor(1);
    }
  }

  update() {
    this.blocks.forEach(b => {
      b.update();
    });
  }

  reset() {
    this.blocks.forEach(b => b.setColor(0));
    this.random(100);
  }
}
