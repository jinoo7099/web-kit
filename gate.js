exports.nand = (a, b) => (!(a & b) ? 1 : 0);
exports.nor = (a, b) => (!(a | b) ? 1 : 0);
exports.xor = (a, b) => a ^ b;
