import { Component, ViewChild } from '@angular/core';
import { FlexPanelComponent }   from './shared/flex-panel/flex-panel.component';
import { interval }             from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isStart = false;
  sub;
  num = 0;

  get len() {
    return this.panel && this.panel.blocks && this.panel.blocks.length;
  }

  @ViewChild(FlexPanelComponent) panel: FlexPanelComponent;

  constructor() {
  }

  start() {
    this.isStart = true;
    this.sub = interval(0).subscribe(() => {
      this.panel.update();
      this.num++;
    });
  }

  pause() {
    this.isStart = false;
    this.sub.unsubscribe();
  }

  reset() {
    this.panel.reset();
  }
}
