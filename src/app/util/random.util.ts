/**
 * todo 写几个测试
 * 输出 [min, max) 区间的整数
 * Created by kkcra on 2019/1/1
 */
export function randomInt(min: number, max: number): number | undefined {
    return Math.floor(Math.random() * (max - min)) + min;
}
