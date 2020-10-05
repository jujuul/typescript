"use strict";
function getServe(status) {
    if (status === 0) {
        return "massage";
    }
    else if (status === 1) {
        return "spa";
    }
    else if (status === 2) {
        return "dabaojian";
    }
}
var result = getServe(0);
console.log("\u6211\u8981\u53BB" + result);
