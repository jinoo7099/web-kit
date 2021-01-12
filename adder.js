const gate = require("./gate.js");

const nand = (a, b) => gate.nand(a, b);
const nor = (a, b) => gate.nor(a, b);
const xor = (a, b) => gate.xor(a, b);

const halfAdder = (a, b) => {
    return {
        carry: nand(nand(a, b), nand(a, b)) ? 1 : 0,
        sum: xor(a, b) ? 1 : 0
    };
};

const fullAdder = (a, b, c) => {
    return {
        carry: nand(nand(a, b), nand(xor(a, b), c)) ? 1 : 0,
        sum: xor(xor(a, b), c) ? 1 : 0
    };
};

exports.halfAdder = halfAdder;
exports.fullAdder = fullAdder;
