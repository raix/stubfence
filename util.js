/* global _DDP:true */
/* global Package: true */
/* global Meteor: true */

_DDP = Package.ddp.LivedataTest;

if (_DDP) {
  _DDP = _DDP.Connection && _DDP.Connection.prototype;
} else {
  _DDP = Meteor.connection.__proto__;
}

if (!_DDP) {
  throw new Error('Arg! Meteor just broke raix:stubfence! Please report to @raix at github, and he will work his butt off trying to fix this');
}
