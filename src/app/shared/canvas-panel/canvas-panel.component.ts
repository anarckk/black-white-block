/**
 * Created by kkcra on 2019/1/1
 */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'canvas-panel',
  template: `
    <canvas #cv height="800" width="1250"></canvas>
  `,
  styles: [`
    canvas {
      border: 1px solid black;
    }
  `]
})
export class CanvasPanelComponent implements OnInit {
  @ViewChild('cv') canvas: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 55, 50);
  }
}
