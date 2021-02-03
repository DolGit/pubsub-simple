"use strict";

exports.__esModule = true;
var subs = {};

var get = function get() {
  return subs;
};

var call = function call(key) {
  return function (args) {
    subs[key] && subs[key].map(function (fn) {
      return fn.apply(undefined, args);
    });
  };
};

var add = function add(key) {
  return function (fn) {
    var sub = subs[key] = subs[key] || [];
    fn && sub.push(fn);
    return subs;
  };
};

var define = function define(key) {
  return add(key)();
};

exports.get = get;
exports.call = call;
exports.add = add;
exports.define = define;