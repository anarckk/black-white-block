/**
 * Created by kkcra on 2019/1/1
 */
import { NgModule }             from '@angular/core';
import { CanvasPanelComponent } from './canvas-panel/canvas-panel.component';
import { CommonModule }         from '@angular/common';
import { FlexPanelComponent }   from './flex-panel/flex-panel.component';
import { BwBlockComponent }     from './flex-panel/bw-block/bw-block.component';

const Export_Components = [
  CanvasPanelComponent,
  FlexPanelComponent,
];

const Inner_Components = [
  BwBlockComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...Export_Components,
    ...Inner_Components,
  ],
  exports: [
    ...Export_Components,
  ],
})
export class SharedModule {
}
