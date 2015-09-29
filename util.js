/* global _DDP:true */

_DDP = Package.ddp && Package.ddp.LivedataTest;

if (_DDP) {
  _DDP = _DDP.Connection && _DDP.Connection.prototype;
} else {
  _DDP = Meteor.connection.__proto__; // jshint ignore:line
}

if (!_DDP) {
  throw new Error('Arg! Meteor just broke raix:stubfence! Please report to @raix at github, and he will work his butt' +
    ' off trying to fix this');
}
