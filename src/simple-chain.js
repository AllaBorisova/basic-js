const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;

  },
  addLink(value) {
    this.chain.push('( ' + value + ' )');

  },
  removeLink(position) {
    // if (position.isInteger()) {
    //   return this.chain.splice(position, 1);
    // } else {
    //   this.chain = [];
    //   throw new Error("You can't remove incorrect link!");
    // }

  },
  reverseChain() {
    // return this.chain.reverse();

  },
  finishChain() {
    // let result = this.chain.join('~~');
    // this.chain = [];
    // return result;

  }
};
// chainMaker.addLink(1);
// chainMaker.addLink(3);
// console.log(chainMaker.finishChain());

module.exports = {
  chainMaker
};
