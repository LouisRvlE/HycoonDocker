// *                                             * //
function f(x: number) {
    return Math.ceil((x * 2) ** 2);
}

export function scoreCalcFunc(x: number, score: number, mult: number = 1) {
    // console.log("testing", 10 * Math.log(x + 1) * score * mult);
    if (mult >= 0) return Math.floor(10 * Math.log(x + 1) * score * mult);
    if (mult < 0) return Math.floor(Math.exp((x + 800) / 1000) * score * mult);
}

export default f;
