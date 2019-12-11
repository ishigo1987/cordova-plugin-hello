/*global cordova, module*/
const exec = require('cordova/exec');
module.exports = {
    greet: function (name, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "deleteSms", "delete", [name]);
    }
};
