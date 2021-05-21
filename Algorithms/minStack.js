/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.elements = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.elements.push({
    value: XMLDocument,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin),
  })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};