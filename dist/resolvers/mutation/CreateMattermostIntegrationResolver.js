"use strict";

var _graphqlSubscriptions = require("graphql-subscriptions");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pubsub = new _graphqlSubscriptions.PubSub();

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj, _ref2, _ref3) {
    var input = _ref2.input;
    var request = _ref3.request;
    var messages, entry;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            messages = [];
            entry = { mattermostEndpoint: "https://mattermost.com", mattermostChannel: input.channel };


            console.log(entry);
            messages.push(entry);
            pubsub.publish('newMessage', { entry: entry, authToken: 'someToken' });
            return _context.abrupt("return", entry);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();