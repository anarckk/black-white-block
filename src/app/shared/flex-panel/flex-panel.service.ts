/**
 * Created by kkcra on 2019/1/1
 */
import { Injectable, QueryList } from '@angular/core';
import { BwBlockComponent }      from './bw-block/bw-block.component';

@Injectable()
export class FlexPanelService {
  blocks: QueryList<BwBlockComponent>;

  constructor() { }

  get(row, col): BwBlockComponent | undefined {
    return this.blocks.find(b => b.row === row && b.col === col);
  }
}
