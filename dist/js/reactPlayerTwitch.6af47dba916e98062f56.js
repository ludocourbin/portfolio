(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(1)),o=n(23),a=n(79);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,e);var t,n,i,c=f(y);function y(){var e;l(this,y);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(d(e=c.call.apply(c,[this].concat(n))),"callPlayer",o.callPlayer),b(d(e),"playerID",e.props.config.playerId||"".concat("twitch-player-").concat((0,o.randomString)())),b(d(e),"mute",(function(){e.callPlayer("setMuted",!0)})),b(d(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),e}return t=y,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this,r=this.props,i=r.playsinline,c=r.onError,l=r.config,p=r.controls,s=a.MATCH_URL_TWITCH_CHANNEL.test(e),f=s?e.match(a.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(a.MATCH_URL_TWITCH_VIDEO)[1];t?s?this.player.setChannel(f):this.player.setVideo("v"+f):(0,o.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((function(e){n.player=new e.Player(n.playerID,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({video:s?"":f,channel:s?f:"",height:"100%",width:"100%",playsinline:i,autoplay:n.props.playing,muted:n.props.muted,controls:!!s||p},l.options));var t=e.Player,r=t.READY,o=t.PLAYING,a=t.PAUSE,c=t.ENDED,y=t.ONLINE,d=t.OFFLINE;n.player.addEventListener(r,n.props.onReady),n.player.addEventListener(o,n.props.onPlay),n.player.addEventListener(a,n.props.onPause),n.player.addEventListener(c,n.props.onEnded),n.player.addEventListener(y,n.props.onLoaded),n.player.addEventListener(d,n.props.onLoaded)}),c)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return r.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}])&&p(t.prototype,n),i&&p(t,i),y}(r.Component);t.default=v,b(v,"displayName","Twitch"),b(v,"canPlay",a.canPlay.twitch),b(v,"loopOnEnded",!0)}}]);