"use strict";
//discriminating union
var errorStatus = /** @class */ (function () {
    function errorStatus() {
    }
    return errorStatus;
}());
var successStatus = /** @class */ (function () {
    function successStatus() {
    }
    return successStatus;
}());
function Get(status) {
    switch (status.type) {
        case "success":
            console.log(status.response);
            break;
        case "error":
            console.log(status.code);
            break;
        default:
            break;
    }
}
var game = {
    title: 'Halo',
    success: true,
};
var artist = {
    name: 'MIchael Jackson',
    success: false,
    error: '404'
};
//Type GUards .- reconocimiento de tipos de datos(number, strings, etc), para realizar acciones
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}

