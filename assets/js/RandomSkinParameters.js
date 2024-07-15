document.getElementById("seedForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let seed = parseFloat(document.getElementById("seed").value);
            let xmin = parseFloat(document.getElementById("xmin").value);
            let xmax = parseFloat(document.getElementById("xmax").value);
            let ymin = parseFloat(document.getElementById("ymin").value);
            let ymax = parseFloat(document.getElementById("ymax").value);
            let rmin = parseFloat(document.getElementById("rmin").value);
            let rmax = parseFloat(document.getElementById("rmax").value);
           
            
            
                let values = ValveLinearCongruentialGenerator(seed);
                xoffset = lerp(xmin, xmax, values[0]);
                yoffset = lerp(ymin, ymax, values[1]);
                rotation = lerp(rmin, rmax, values[2]);
                document.getElementById("result").textContent = 
                `x-offset: ${xoffset}<br>
                y-offset: ${yoffset}<br>
                Rotation: ${rotation}`;
            
        });

function lerp(a, b, t){
	return (b - a) * t + a;
}

function ValveLinearCongruentialGenerator(seed) {
    const M = 2147483647;  // 2^31 - 1
    const A = 16807;       // 7^5
    const R = M % A;
    const Q = Math.floor(M / A);
    const NDIV = Math.floor((M - 1) / 32) + 1;

    let state = seed;
    let values = [];
    let y;

    // Initialization steps similar to Python __init__
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

    // Generating and returning the first 3 floats
    let floats = [];
    for (let i = 0; i < 3; i++) {
        floats.push(random_float([0.0, 1.0]));
    }

    return floats;
}
