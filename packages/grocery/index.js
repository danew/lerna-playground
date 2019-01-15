const apple = require('apple');
const banana = require('banana');

const printItem = (item, name) => `${name}'s ${item}`;

console.log('My basket has', printItem(...apple), 'and', printItem(...banana));