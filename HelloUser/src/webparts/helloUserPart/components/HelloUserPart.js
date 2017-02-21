"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HelloUserPart = (function (_super) {
    __extends(HelloUserPart, _super);
    function HelloUserPart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { data: null, isValid: false };
        return _this;
    }
    HelloUserPart.prototype.render = function () {
        if (this.state.isValid) {
            return React.createElement("div", null,
                "Welcome, ",
                this.state.data,
                " !");
        }
        else {
            return React.createElement("div", null, this.props.busyMessage);
        }
    };
    HelloUserPart.prototype.componentDidMount = function () {
        var _this = this;
        fetch('../_api/web/currentuser', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'accept': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            _this.setState({ data: json.value, isValid: true });
        }).catch(function (e) {
            console.log(e);
        });
    };
    return HelloUserPart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloUserPart;
//# sourceMappingURL=HelloUserPart.js.map