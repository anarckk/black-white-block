/**
 * Created by kkcra on 2019/1/1
 */
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FlexPanelService }                                                                       from '../flex-panel.service';

@Component({
  selector: 'bw-block',
  template: `
    <div [ngStyle]="style" [style.backgroundColor]='color' (click)="setColor(1)">
    </div>
  `,
  styles: [`
    div {
      font-size: 12px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BwBlockComponent implements OnInit, AfterViewChecked {
  around = [];
  @Input() row;
  @Input() col;
  style = {
    'width': 5 + 'px',
    'height': 5 + 'px',
    'border': '1px solid #9e9e9e',
  };
  color: '#fff' | '#000' = '#fff';
  lastLen;
  lastAlive: boolean;

  constructor(
    private cd: ChangeDetectorRef,
    private panelSer: FlexPanelService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    if (this.panelSer.blocks)
      if (!this.lastLen || this.lastLen !== this.panelSer.blocks.length) {
        this.lastLen = this.panelSer.blocks.length;
        this.setAround();
        console.count('set around');
      }
  }

  setColor(type: 0 | 1) {
    this.lastAlive = this.isAlive();
    if (type === 0) {
      this.color = '#fff';
    } else if (type === 1) {
      this.color = '#000';
    }
    this.cd.detectChanges();
  }

  isAlive(): boolean {
    return this.color === '#000';
  }

  update() {
    const whiteNum = this.around.filter(comp => comp && comp.lastAlive).length;
    if (whiteNum === 3) {
      this.setColor(1);
    } else if (whiteNum === 2) {
    } else {
      this.setColor(0);
    }
  }

  setAround() {
    this.around = [
      this.panelSer.get(this.row - 1, this.col - 1),
      this.panelSer.get(this.row - 1, this.col),
      this.panelSer.get(this.row - 1, this.col + 1),
      this.panelSer.get(this.row, this.col - 1),
      this.panelSer.get(this.row, this.col + 1),
      this.panelSer.get(this.row + 1, this.col - 1),
      this.panelSer.get(this.row + 1, this.col),
      this.panelSer.get(this.row + 1, this.col + 1),
    ];
  }
}
