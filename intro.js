// console.log(__filename)
// setInterval(() =>{
//     console.log("Hello world!")
// }, 1000)

const secret = 'Super secret';
const john = 'john';
const peter = 'peter';

const sayHi = require('./sayHi');
sayHi(john)
module.exports = {john, peter}