"use strict";
exports.__esModule = true;
exports.getName = exports.fetchPerson = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = exports.addtoNumberArray = void 0;
// Function parameter and return types
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
// TS infers the return type - try cmd-k, cmd-i
function addtoNumberArray(nums, inc) {
    var newNums = nums.map(function (num) { return num + inc; });
    return newNums;
}
exports.addtoNumberArray = addtoNumberArray;
// Arrow functions
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// params is a union type - string OR number
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void is return type when nothing returned
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Use cmd-k,cmd-i to suggest return type.
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
var fetchPerson = function (url) {
    return Promise.resolve({
        first: "diarmuid",
        last: "o connor"
    });
};
exports.fetchPerson = fetchPerson;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
// Type checking only happens at compile-time
function getName(user) {
    return "".concat(user.first, " ").concat(user.last);
}
exports.getName = getName;
// export function getNameSafer(user: { first: string; last: string }): string {
//   return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
// }
