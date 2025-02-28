export function isNegative(num: number, den: number): boolean {
    return  (num < 0 && den > 0) || (num > 0 && den < 0) || (num < 0 && den < 0 && Math.abs(num) >= Math.abs(den));
}