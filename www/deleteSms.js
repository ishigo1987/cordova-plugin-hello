/*global cordova, module*/
const exec = require('cordova/exec');
module.exports = {
    delete: function (name, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "deleteSms", "delete", [name]);
    }
};
