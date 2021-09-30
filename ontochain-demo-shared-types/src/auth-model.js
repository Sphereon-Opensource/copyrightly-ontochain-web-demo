// noinspection JSUnusedGlobalSymbols
var QRVariables = /** @class */ (function () {
    function QRVariables() {
    }
    return QRVariables;
}());
export { QRVariables };
var StateMapping = /** @class */ (function () {
    function StateMapping() {
        this.authRequestCreated = false;
    }
    return StateMapping;
}());
export { StateMapping };
var AuthResponse = /** @class */ (function () {
    function AuthResponse(userDID, userName) {
        this.userDID = userDID;
        this.userName = userName;
    }
    return AuthResponse;
}());
export { AuthResponse };
