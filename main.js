const convert = require("./convert.js");
const gate = require("./gate.js");
const adder = require("./adder.js");

console.log("2진수 <-> 10진수 변환기");
console.log(`1111(2) ->  ${convert.binaryToDecimal(1111)}`);
console.log(`13 -> ${convert.decimalToBinary(13)}\n`);

console.log("XOR, NAND, NOR 회로");
console.log(`0 XOR 1 -> ${gate.xor(0, 1)}`);
console.log(`1 NAND 0 -> ${gate.nand(1, 0)}`);
console.log(`1 NOR 1 -> ${gate.nor(1, 1)}\n`);

console.log("반가산기 전가산기");
console.log(`1 + 1 -> carry : ${adder.halfAdder(1, 1).carry}, sum : ${adder.halfAdder(1, 1).sum}`);
console.log(`1 + 0 -> carry : ${adder.halfAdder(1, 0).carry}, sum : ${adder.halfAdder(1, 0).sum}\n`);

console.log(`1 + 0 + 0 -> carry : ${adder.fullAdder(1, 0, 0).carry}, sum : ${adder.fullAdder(1, 0, 0).sum}`);
console.log(`1 + 1 + 1 -> carry : ${adder.fullAdder(1, 1, 1).carry}, sum : ${adder.fullAdder(1, 1, 1).sum}`);
