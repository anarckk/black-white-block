/**
 * 更新游戏数据
 * @param array
 */
import { Ceil } from './ceil';

export function updateGame(array: Array<Array<Ceil>>) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const around: Ceil[] = [
                getCeil(array, i - 1, j - 1),
                getCeil(array, i - 1, j),
                getCeil(array, i - 1, j + 1),
                getCeil(array, i, j - 1),
                getCeil(array, i, j + 1),
                getCeil(array, i + 1, j - 1),
                getCeil(array, i + 1, j),
                getCeil(array, i + 1, j + 1),
            ];
            const len = around.filter(c => c && c.value === 1).length;
            if (len === 3) {
                array[i][j].calculateValue = 1;
            } else if (len === 2) {
                array[i][j].calculateValue = array[i][j].value;
            } else {
                array[i][j].calculateValue = 0;
            }
        }
    }
}

/**
 * 根据 row、col 获得 value
 * @param array
 * @param row
 * @param col
 */
function getCeil(array: Array<Array<Ceil>>, row, col) {
    let result = null;
    if (row > 0 && row < array.length) {
        if (col > 0 && col < array[row].length) {
            result = array[row][col];
        }
    }
    return result;
}
