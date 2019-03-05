"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

module.exports = function (root, _ref, context) {
    _objectDestructuringEmpty(_ref);

    var messages = [];
    //console.log(root)
    var entry = { id: 2, message: "hii" };
    messages.push(entry);

    return messages;
};