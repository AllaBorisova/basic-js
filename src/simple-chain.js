const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  // constructor() {
  //   this.chain = [];
  // },

  getLength() {
    return this.chain.length;

  },
  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return this;

  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 1 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

  },
  reverseChain() {
    this.chain.reverse();
    return this;

  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;

  }
};
// chainMaker.addLink(1);
// chainMaker.addLink(3);
// console.log(chainMaker.finishChain());

module.exports = {
  chainMaker
};
