import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { string, oneOfType, node, bool, func, number, shape } from 'prop-types';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var success = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 426.667 426.667", width: 18, height: 18 }, props),
    React.createElement("path", { d: "M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z", fill: "#6ac259" }))); };
var warn = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 310.285 310.285", width: 18, height: 18 }, props),
    React.createElement("path", { d: "M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z", fill: "#FFDA44" }))); };
var loading = function (props) { return React.createElement("div", __assign({ className: "ct-icon-loading" }, props)); };
var info = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 23.625 23.625", width: 18, height: 18 }, props),
    React.createElement("path", { d: "M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z", fill: "#006DF0" }))); };
var error = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 51.976 51.976", width: 18, height: 18 }, props),
    React.createElement("path", { d: "M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z", fill: "#D80027" }))); };
var Icons = {
    success: success,
    warn: warn,
    loading: loading,
    info: info,
    error: error,
};

var colors = {
    success: '#6EC05F',
    info: '#1271EC',
    warn: '#FED953',
    error: '#D60A2E',
    loading: '#0088ff',
};
var Toast = function (props) {
    var _a;
    var _b, _c, _d;
    var place = (props.position || 'top-center').includes('bottom') ? 'Bottom' : 'Top';
    var marginType = "margin" + place;
    var className = [
        'ct-toast',
        props.onClick ? ' ct-cursor-pointer' : '',
        "ct-toast-" + props.type,
    ].join(' ');
    var borderLeft = (((_b = props.bar) === null || _b === void 0 ? void 0 : _b.size) || '3px') + " " + (((_c = props.bar) === null || _c === void 0 ? void 0 : _c.style) || 'solid') + " " + (((_d = props.bar) === null || _d === void 0 ? void 0 : _d.color) || colors[props.type]);
    var CurrentIcon = Icons[props.type];
    var _e = useState((_a = { opacity: 0 }, _a[marginType] = -15, _a)), animStyles = _e[0], setAnimStyles = _e[1];
    var style = __assign({ paddingLeft: props.heading ? 25 : undefined, minHeight: props.heading ? 50 : undefined, borderLeft: borderLeft }, animStyles);
    var handleHide = function () {
        var _a;
        setAnimStyles((_a = { opacity: 0 }, _a[marginType] = '-15px', _a));
        setTimeout(function () {
            props.onHide(props.id, props.position);
        }, 300);
    };
    useEffect(function () {
        var animTimeout = setTimeout(function () {
            var _a;
            setAnimStyles((_a = { opacity: 1 }, _a[marginType] = '15px', _a));
        }, 50);
        var hideTimeout;
        if (props.hideAfter !== 0) {
            hideTimeout = setTimeout(function () {
                handleHide();
            }, props.hideAfter * 1000);
        }
        return function () {
            clearTimeout(animTimeout);
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, []);
    useEffect(function () {
        if (!props.show) {
            handleHide();
        }
    }, [props.show]);
    var clickProps = {
        tabIndex: 0,
        onClick: props.onClick,
        onKeyPress: function (e) {
            if (e.keyCode === 13) {
                props.onClick(e);
            }
        },
    };
    return (React.createElement("div", __assign({ className: className, role: props.role ? props.role : 'status', style: style }, (props.onClick ? clickProps : {})),
        props.renderIcon ? props.renderIcon() : React.createElement(CurrentIcon, null),
        React.createElement("div", { className: props.heading ? 'ct-text-group-heading' : 'ct-text-group' },
            props.heading && React.createElement("h4", { className: "ct-heading" }, props.heading),
            React.createElement("div", { className: "ct-text" }, props.text))));
};
Toast.propTypes = {
    type: string.isRequired,
    text: oneOfType([string, node]).isRequired,
    show: bool,
    onHide: func,
    id: oneOfType([string, number]),
    hideAfter: number,
    heading: string,
    position: string,
    renderIcon: func,
    bar: shape({}),
    onClick: func,
    role: string,
};
Toast.defaultProps = {
    id: undefined,
    show: true,
    onHide: undefined,
    hideAfter: 3,
    heading: undefined,
    position: 'top-center',
    renderIcon: undefined,
    bar: {},
    onClick: undefined,
    role: 'status',
};

var camelCase = function (str) { return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }); };
var defaultToasts = {
    topLeft: [],
    topCenter: [],
    topRight: [],
    bottomLeft: [],
    bottomCenter: [],
    bottomRight: [],
};
var ToastContainer = function (_a) {
    var toast = _a.toast, hiddenID = _a.hiddenID;
    var _b = useState(defaultToasts), allToasts = _b[0], setToasts = _b[1];
    useEffect(function () {
        if (toast) {
            setToasts(function (prevToasts) {
                var _a;
                var position = camelCase(toast.position || 'top-center');
                return __assign(__assign({}, prevToasts), (_a = {}, _a[position] = __spreadArrays(prevToasts[position], [toast]), _a));
            });
        }
    }, [toast]);
    var handleRemove = function (callback) {
        return function (id, position) {
            setToasts(function (prevToasts) {
                var _a;
                var toastPosition = camelCase(position || 'top-center');
                return __assign(__assign({}, prevToasts), (_a = {}, _a[toastPosition] = prevToasts[toastPosition].filter(function (item) { return item.id !== id; }), _a));
            });
            typeof callback === 'function' && callback(id, position);
        };
    };
    var rows = ['top', 'bottom'];
    var groups = ['Left', 'Center', 'Right'];
    return (React.createElement(React.Fragment, null, rows.map(function (row) { return (React.createElement("div", { key: "row_" + row, className: "ct-row" }, groups.map(function (group) {
        var type = "" + row + group;
        var className = ['ct-group', row === 'bottom' ? 'ct-flex-bottom' : ''].join(' ');
        return (React.createElement("div", { key: type, className: className }, allToasts[type].map(function (item) { return (React.createElement(Toast, __assign({ key: type + "_" + item.id }, item, { id: item.id, text: item.text, type: item.type, onClick: item.onClick, hideAfter: item.hideAfter, show: hiddenID !== item.id, onHide: handleRemove(item.onHide) }))); })));
    }))); })));
};
ToastContainer.propTypes = {
    toast: shape({}),
    hiddenID: number,
};
ToastContainer.defaultProps = {
    toast: undefined,
    hiddenID: undefined,
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "#ct-container {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\tz-index: 2000;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\tpointer-events: none;\r\n\toverflow: hidden;\r\n}\r\n\r\n.ct-row {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.ct-group {\r\n\tflex: 1;\r\n\tmargin: 10px 20px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n.ct-group:first-child {\r\n\talign-items: flex-start;\r\n}\r\n\r\n.ct-group:last-child {\r\n\talign-items: flex-end;\r\n}\r\n\r\n.ct-flex-bottom {\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.ct-toast {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 12px 20px;\r\n\tbackground-color: #fff;\r\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n\tcolor: #000;\r\n\tborder-radius: 4px;\r\n\tmargin: 0px;\r\n\topacity: 1;\r\n\ttransition: 0.3s all ease-in-out;\r\n\tmin-height: 45px;\r\n\tpointer-events: all;\r\n}\r\n\r\n.ct-toast:focus {\r\n\toutline: none;\r\n}\r\n\r\n.ct-toast svg {\r\n\tmin-width: 18px;\r\n}\r\n\r\n.ct-cursor-pointer {\r\n\tcursor: pointer;\r\n}\r\n\r\n.ct-icon-loading {\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n\r\n.ct-icon-loading:after {\r\n\tcontent: ' ';\r\n\tdisplay: block;\r\n\twidth: 14px;\r\n\theight: 14px;\r\n\tmargin: 1px;\r\n\tborder-radius: 50%;\r\n\tborder: 2px solid #0088ff;\r\n\tborder-color: #0088ff transparent #0088ff transparent;\r\n\tanimation: ct-icon-loading 1.2s linear infinite;\r\n}\r\n\r\n@keyframes ct-icon-loading {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n.ct-text-group {\r\n\tmargin-left: 15px;\r\n}\r\n\r\n.ct-text-group-heading {\r\n\tmargin-left: 25px;\r\n}\r\n\r\n.ct-heading {\r\n\tfont-size: 18px;\r\n\tmargin: 0px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.ct-text {\r\n\tfont-size: 14px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\t.ct-row {\r\n\t\tjustify-content: flex-start;\r\n\t\tflex-direction: column;\r\n\t\tmargin: 7px 0px;\r\n\t}\r\n\r\n\t.ct-group {\r\n\t\tflex: none;\r\n\t\tmargin: 0px;\r\n\t}\r\n\r\n\t.ct-toast {\r\n\t\tmargin: 8px 15px;\r\n\t\twidth: initial;\r\n\t}\r\n}\r\n";
styleInject(css_248z);

var ctToastCount = 0;
var cogoToast = function (text, options) {
    var rootContainer = document.getElementById((options === null || options === void 0 ? void 0 : options.toastContainerID) || 'ct-container');
    if (!rootContainer) {
        rootContainer = document.createElement('div');
        rootContainer.id = 'ct-container';
        document.body.appendChild(rootContainer);
    }
    ctToastCount += 1;
    var hideTime = ((options === null || options === void 0 ? void 0 : options.hideAfter) === undefined ? 3 : options.hideAfter) * 1000;
    var toast = __assign({ id: ctToastCount, text: text }, options);
    ReactDOM.render(React.createElement(ToastContainer, { toast: toast }), rootContainer);
    var hide = function () {
        ReactDOM.render(React.createElement(ToastContainer, { hiddenID: toast.id }), rootContainer);
    };
    var completePromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, hideTime);
    });
    completePromise.hide = hide;
    return completePromise;
};
cogoToast.success = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'success' })); };
cogoToast.warn = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'warn' })); };
cogoToast.info = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'info' })); };
cogoToast.error = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'error' })); };
cogoToast.loading = function (t, o) { return cogoToast(t, __assign(__assign({}, o), { type: 'loading' })); };

export default cogoToast;
export { Toast };
