'use strict';
/*----------------------------------------------------------------
Promises Workshop: build the pledge.js ES6-style promise library
----------------------------------------------------------------*/
// YOUR CODE HERE:


class $Promise{
  constructor(func){
    if(typeof func !== "function") throw TypeError (/executor.+function/i);

    func(this._internalResolve,this._internalReject)

    this._state = "pending";
    this._value = null;

  }

  _internalResolve (args){
    if(this._state === "pending") {
      this._state = "fulfilled";
      this._value = args;
    }

  }

  _internalReject(args){
    if(this._state === "pending") {
      this._value = args;
      this._state = "rejected";
    }
  }
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
