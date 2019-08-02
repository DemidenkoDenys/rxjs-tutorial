(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Projects\\rxjs-tutorial\\assets\\js\\global.js":[function(require,module,exports){
(function (global){
"use strict";

var _global = require("./modules/global");

var _global2 = _interopRequireDefault(_global);

var _HOME = require("./modules/HOME");

var _HOME2 = _interopRequireDefault(_HOME);

var _main = require("./modules/main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.body.className += 'ontouchstart' in window ? 'touch' : 'no-touch';

var init = function init() {},
    load = function load() {},
    scroll = function scroll() {};

if (global.vars !== undefined) {
    switch (global.vars.page) {
        case 'home_page':
            init = _HOME2.default.init.bind(_HOME2.default);
            break;
        case 'main_page':
            init = _main2.default.init.bind(_HOME2.default);
            break;
    }
}

$(document).ready(_global2.default.init(), init());

// $(window).scroll(GLOBAL.scroll);
//
// $(window).resize(GLOBAL.resize);
//
// $(window).on('load', ()=>{
//     GLOBAL.load();
//     load();
// });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./modules/HOME":"C:\\Projects\\rxjs-tutorial\\assets\\js\\modules\\HOME.js","./modules/global":"C:\\Projects\\rxjs-tutorial\\assets\\js\\modules\\global.js","./modules/main":"C:\\Projects\\rxjs-tutorial\\assets\\js\\modules\\main.js"}],"C:\\Projects\\rxjs-tutorial\\assets\\js\\modules\\HOME.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        console.log('home init');
    }
};

},{}],"C:\\Projects\\rxjs-tutorial\\assets\\js\\modules\\global.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        console.log('global init');
    }
};

},{}],"C:\\Projects\\rxjs-tutorial\\assets\\js\\modules\\main.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        M.AutoInit();
    }
};

},{}]},{},["C:\\Projects\\rxjs-tutorial\\assets\\js\\global.js"])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvZ2xvYmFsLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvSE9NRS5qcyIsImFzc2V0cy9qcy9tb2R1bGVzL2dsb2JhbC5qcyIsImFzc2V0cy9qcy9tb2R1bGVzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsSUFBVCxDQUFjLFNBQWQsSUFBNEIsa0JBQWtCLE1BQW5CLEdBQTZCLE9BQTdCLEdBQXVDLFVBQWxFOztBQUVBLElBQUksT0FBTyxnQkFBVSxDQUFFLENBQXZCO0FBQUEsSUFDSSxPQUFPLFNBQVAsSUFBTyxHQUFVLENBQUUsQ0FEdkI7QUFBQSxJQUVJLFNBQVMsU0FBVCxNQUFTLEdBQVUsQ0FBRSxDQUZ6Qjs7QUFJQSxJQUFHLE9BQU8sSUFBUCxLQUFnQixTQUFuQixFQUE4QjtBQUMxQixZQUFRLE9BQU8sSUFBUCxDQUFZLElBQXBCO0FBQ0ksYUFBSyxXQUFMO0FBQ0ksbUJBQU8sZUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQWYsQ0FBUDtBQUNBO0FBQ0osYUFBSyxXQUFMO0FBQ0ksbUJBQU8sZUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQWYsQ0FBUDtBQUNBO0FBTlI7QUFRSDs7QUFFRCxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLGlCQUFPLElBQVAsRUFBbEIsRUFBaUMsTUFBakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztrQkM5QmU7QUFDWCxRQURXLGtCQUNMO0FBQ0YsZ0JBQVEsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUhVLEM7Ozs7Ozs7O2tCQ0FBO0FBQ1gsUUFEVyxrQkFDTDtBQUNGLGdCQUFRLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFIVSxDOzs7Ozs7OztrQkNBQTtBQUNYLFFBRFcsa0JBQ0w7QUFDRixVQUFFLFFBQUY7QUFDSDtBQUhVLEMiLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBHTE9CQUwgZnJvbSBcIi4vbW9kdWxlcy9nbG9iYWxcIjtcbmltcG9ydCBIT01FIGZyb20gXCIuL21vZHVsZXMvSE9NRVwiO1xuaW1wb3J0IE1BSU4gZnJvbSBcIi4vbW9kdWxlcy9tYWluXCI7XG5cbmRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpID8gJ3RvdWNoJyA6ICduby10b3VjaCc7XG5cbmxldCBpbml0ID0gZnVuY3Rpb24oKXt9LFxuICAgIGxvYWQgPSBmdW5jdGlvbigpe30sXG4gICAgc2Nyb2xsID0gZnVuY3Rpb24oKXt9O1xuXG5pZihnbG9iYWwudmFycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3dpdGNoIChnbG9iYWwudmFycy5wYWdlKSB7XG4gICAgICAgIGNhc2UgJ2hvbWVfcGFnZSc6XG4gICAgICAgICAgICBpbml0ID0gSE9NRS5pbml0LmJpbmQoSE9NRSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWFpbl9wYWdlJzpcbiAgICAgICAgICAgIGluaXQgPSBNQUlOLmluaXQuYmluZChIT01FKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoR0xPQkFMLmluaXQoKSwgaW5pdCgpKTtcblxuLy8gJCh3aW5kb3cpLnNjcm9sbChHTE9CQUwuc2Nyb2xsKTtcbi8vXG4vLyAkKHdpbmRvdykucmVzaXplKEdMT0JBTC5yZXNpemUpO1xuLy9cbi8vICQod2luZG93KS5vbignbG9hZCcsICgpPT57XG4vLyAgICAgR0xPQkFMLmxvYWQoKTtcbi8vICAgICBsb2FkKCk7XG4vLyB9KTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBpbml0Jyk7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFsIGluaXQnKTtcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQoKXtcclxuICAgICAgICBNLkF1dG9Jbml0KCk7XHJcbiAgICB9LFxyXG59O1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSmhjM05sZEhNdmFuTXZaMnh2WW1Gc0xtcHpJaXdpWVhOelpYUnpMMnB6TDIxdlpIVnNaWE12U0U5TlJTNXFjeUlzSW1GemMyVjBjeTlxY3k5dGIyUjFiR1Z6TDJkc2IySmhiQzVxY3lJc0ltRnpjMlYwY3k5cWN5OXRiMlIxYkdWekwyMWhhVzR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3UVVOQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxGTkJRVk1zU1VGQlZDeERRVUZqTEZOQlFXUXNTVUZCTkVJc2EwSkJRV3RDTEUxQlFXNUNMRWRCUVRaQ0xFOUJRVGRDTEVkQlFYVkRMRlZCUVd4Rk96dEJRVVZCTEVsQlFVa3NUMEZCVHl4blFrRkJWU3hEUVVGRkxFTkJRWFpDTzBGQlFVRXNTVUZEU1N4UFFVRlBMRk5CUVZBc1NVRkJUeXhIUVVGVkxFTkJRVVVzUTBGRWRrSTdRVUZCUVN4SlFVVkpMRk5CUVZNc1UwRkJWQ3hOUVVGVExFZEJRVlVzUTBGQlJTeERRVVo2UWpzN1FVRkpRU3hKUVVGSExFOUJRVThzU1VGQlVDeExRVUZuUWl4VFFVRnVRaXhGUVVFNFFqdEJRVU14UWl4WlFVRlJMRTlCUVU4c1NVRkJVQ3hEUVVGWkxFbEJRWEJDTzBGQlEwa3NZVUZCU3l4WFFVRk1PMEZCUTBrc2JVSkJRVThzWlVGQlN5eEpRVUZNTEVOQlFWVXNTVUZCVml4RFFVRmxMR05CUVdZc1EwRkJVRHRCUVVOQk8wRkJRMG9zWVVGQlN5eFhRVUZNTzBGQlEwa3NiVUpCUVU4c1pVRkJTeXhKUVVGTUxFTkJRVlVzU1VGQlZpeERRVUZsTEdOQlFXWXNRMEZCVUR0QlFVTkJPMEZCVGxJN1FVRlJTRHM3UVVGRlJDeEZRVUZGTEZGQlFVWXNSVUZCV1N4TFFVRmFMRU5CUVd0Q0xHbENRVUZQTEVsQlFWQXNSVUZCYkVJc1JVRkJhVU1zVFVGQmFrTTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3p0clFrTTVRbVU3UVVGRFdDeFJRVVJYTEd0Q1FVTk1PMEZCUTBZc1owSkJRVkVzUjBGQlVpeERRVUZaTEZkQlFWbzdRVUZEU0R0QlFVaFZMRU03T3pzN096czdPMnRDUTBGQk8wRkJRMWdzVVVGRVZ5eHJRa0ZEVER0QlFVTkdMR2RDUVVGUkxFZEJRVklzUTBGQldTeGhRVUZhTzBGQlEwZzdRVUZJVlN4RE96czdPenM3T3p0clFrTkJRVHRCUVVOWUxGRkJSRmNzYTBKQlEwdzdRVUZEUml4VlFVRkZMRkZCUVVZN1FVRkRTRHRCUVVoVkxFTWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlISW9aU3h1TEhRcGUyWjFibU4wYVc5dUlHOG9hU3htS1h0cFppZ2hibHRwWFNsN2FXWW9JV1ZiYVYwcGUzWmhjaUJqUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21VN2FXWW9JV1ltSm1NcGNtVjBkWEp1SUdNb2FTd2hNQ2s3YVdZb2RTbHlaWFIxY200Z2RTaHBMQ0V3S1R0MllYSWdZVDF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMmtyWENJblhDSXBPM1JvY205M0lHRXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeGhmWFpoY2lCd1BXNWJhVjA5ZTJWNGNHOXlkSE02ZTMxOU8yVmJhVjFiTUYwdVkyRnNiQ2h3TG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvY2lsN2RtRnlJRzQ5WlZ0cFhWc3hYVnR5WFR0eVpYUjFjbTRnYnlodWZIeHlLWDBzY0N4d0xtVjRjRzl5ZEhNc2NpeGxMRzRzZENsOWNtVjBkWEp1SUc1YmFWMHVaWGh3YjNKMGMzMW1iM0lvZG1GeUlIVTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaU3hwUFRBN2FUeDBMbXhsYm1kMGFEdHBLeXNwYnloMFcybGRLVHR5WlhSMWNtNGdiMzF5WlhSMWNtNGdjbjBwS0NraUxDSnBiWEJ2Y25RZ1IweFBRa0ZNSUdaeWIyMGdYQ0l1TDIxdlpIVnNaWE12WjJ4dlltRnNYQ0k3WEc1cGJYQnZjblFnU0U5TlJTQm1jbTl0SUZ3aUxpOXRiMlIxYkdWekwwaFBUVVZjSWp0Y2JtbHRjRzl5ZENCTlFVbE9JR1p5YjIwZ1hDSXVMMjF2WkhWc1pYTXZiV0ZwYmx3aU8xeHVYRzVrYjJOMWJXVnVkQzVpYjJSNUxtTnNZWE56VG1GdFpTQXJQU0FvSjI5dWRHOTFZMmh6ZEdGeWRDY2dhVzRnZDJsdVpHOTNLU0EvSUNkMGIzVmphQ2NnT2lBbmJtOHRkRzkxWTJnbk8xeHVYRzVzWlhRZ2FXNXBkQ0E5SUdaMWJtTjBhVzl1S0NsN2ZTeGNiaUFnSUNCc2IyRmtJRDBnWm5WdVkzUnBiMjRvS1h0OUxGeHVJQ0FnSUhOamNtOXNiQ0E5SUdaMWJtTjBhVzl1S0NsN2ZUdGNibHh1YVdZb1oyeHZZbUZzTG5aaGNuTWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhOM2FYUmphQ0FvWjJ4dlltRnNMblpoY25NdWNHRm5aU2tnZTF4dUlDQWdJQ0FnSUNCallYTmxJQ2RvYjIxbFgzQmhaMlVuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVwZENBOUlFaFBUVVV1YVc1cGRDNWlhVzVrS0VoUFRVVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMjFoYVc1ZmNHRm5aU2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibWwwSUQwZ1RVRkpUaTVwYm1sMExtSnBibVFvU0U5TlJTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzU5WEc1Y2JpUW9aRzlqZFcxbGJuUXBMbkpsWVdSNUtFZE1UMEpCVEM1cGJtbDBLQ2tzSUdsdWFYUW9LU2s3WEc1Y2JpOHZJQ1FvZDJsdVpHOTNLUzV6WTNKdmJHd29SMHhQUWtGTUxuTmpjbTlzYkNrN1hHNHZMMXh1THk4Z0pDaDNhVzVrYjNjcExuSmxjMmw2WlNoSFRFOUNRVXd1Y21WemFYcGxLVHRjYmk4dlhHNHZMeUFrS0hkcGJtUnZkeWt1YjI0b0oyeHZZV1FuTENBb0tUMCtlMXh1THk4Z0lDQWdJRWRNVDBKQlRDNXNiMkZrS0NrN1hHNHZMeUFnSUNBZ2JHOWhaQ2dwTzF4dUx5OGdmU2s3SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR2x1YVhRb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvSjJodmJXVWdhVzVwZENjcE8xeHVJQ0FnSUgwc1hHNTlPMXh1SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR2x1YVhRb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvSjJkc2IySmhiQ0JwYm1sMEp5azdYRzRnSUNBZ2ZWeHVmVHNpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEhKY2JpQWdJQ0JwYm1sMEtDbDdYSEpjYmlBZ0lDQWdJQ0FnVFM1QmRYUnZTVzVwZENncE8xeHlYRzRnSUNBZ2ZTeGNjbHh1ZlR0Y2NseHVJbDE5In0=
