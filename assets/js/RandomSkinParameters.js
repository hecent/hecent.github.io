function customCalculation(inputs) {
    let seed = inputs.seed;
    let xmin = inputs.xmin;
    let xmax = inputs.xmax;
    let ymin = inputs.ymin;
    let ymax = inputs.ymax;
    let rmin = inputs.rmin;
    let rmax = inputs.rmax;

    let values = ValveLinearCongruentialGenerator(seed);
    let xoffset = lerp(xmin, xmax, values[0]);
    let yoffset = lerp(ymin, ymax, values[1]);
    let rotation = lerp(rmin, rmax, values[2]);

    return `x-offset: ${xoffset}<br>
            y-offset: ${yoffset}<br>
            Rotation: ${rotation}`;
}

function lerp(a, b, t) {
    return (b - a) * t + a;
}

function ValveLinearCongruentialGenerator(seed) {
    const M = 2147483647;
    const A = 16807;
    const R = M % A;
    const Q = Math.floor(M / A);
    const NDIV = Math.floor((M - 1) / 32) + 1;

    let state = seed;
    let values = [];
    let y;

    for (let i = 0; i < 8; i++) {
        LCG();
    }

    for (let i = 0; i < 32; i++) {
        values.push(LCG());
    }
    values.reverse();
    y = values[0];

    function LCG() {
        let div = Math.floor(state / Q);
        let rem = state % Q;

        let s = rem * A;
        let t = div * R;
        let result = s - t;

        if (result < 0) {
            result += M;
        }

        state = result;

        return result;
    }

    function random_int() {
        let j = Math.floor(y / NDIV);
        let temp = values[j];
        values[j] = LCG();
        y = temp;
        return y;
    }

    function random_float(float_range) {
        let result = random_int() / M;
        return (result * (float_range[1] - float_range[0])) + float_range[0];
    }

    let floats = [];
    for (let i = 0; i < 3; i++) {
        floats.push(random_float([0.0, 1.0]));
    }

    return floats;
}
