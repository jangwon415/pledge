'use strict';
/*----------------------------------------------------------------
Promises Workshop: build the pledge.js ES6-style promise library
----------------------------------------------------------------*/
// YOUR CODE HERE:


class $Promise{
  constructor(func){
    if(typeof func !== "function") throw new TypeError ('executor not defined or is nto a function');

    this._state = "pending";
    this._value = undefined;

    this._handlerGroups = [];

    func(this._internalResolve.bind(this), this._internalReject.bind(this));
    }
















}


$Promise.prototype._internalResolve = function (value){
  this._settle('fulfilled', value);
}
$Promise.prototype._internalReject = function (value){
  this._settle('rejected', value);
}
$Promise.prototype._settle = function (state, value) {
  if (this._state === 'pending') {
    this._state = state;
    this._value = value;
    this._callHandlers();
  }
}

const isFn = val => typeof val === 'function'

$Promise.prototype.then = function (successCb, errorCb) {
  const group = {
    successCb: isFn(successCb) ? successCb : undefined,
    errorCb: isFn(errorCb) ? errorCb : undefined
  }
  this._handlerGroups.push(group);
  this._callHandlers();
}



//   if (typeof func1 !== "function"){
//     this.successCb = null;
//   } else {
//     this.successCb = func1;
//   }


//   if (typeof func2 !== "function"){
//     this.errorCb = null;
//   } else {
//     this.errorCb = func2;
//   }

//   this._handlerGroups.push({successCb: this.successCb, errorCb: this.errorCb});

//   if (this._state === "fulfilled"){
//     this._callHandlers(this._value);
//   }
//   // if (this._state === "pending"){

//   // }
//   console.log(this._handlerGroups)

// }


$Promise.prototype._callHandlers = function (){
  if (this._state !== 'pending'){
    this._handlerGroups.forEach(group => {
      if (group.successCb) group.successCb(this._value);
    })
    this._handlerGroups = [];
  }

  // this._handlerGroups[0].successCb(value);
  // this._handlerGroups = this._handlerGroups.slice(1);
}


/*-------------------------------------------------------
The spec was designed to work with Test'Em, so we don't
actually use module.exports. But here it is for reference:

module.exports = $Promise;

So in a Node-based project we could write things like this:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
