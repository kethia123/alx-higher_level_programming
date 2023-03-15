#!usr/bin/node
const Square1 = require('./5-square');

class Square extends Square1 {
    charPrint(c) {
        if(c === undefined){
            c = 'X';
        }
        for (let i = 0; i < this.size; i++) {
            let s = '';
            for (let j = 0; j < this.size; j++) {
                s += c;
            }
            console.log(c);
        }
    }
}

module.exports = Square;
