!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["cloud-widgets"]=t(require("react")):e["cloud-widgets"]=t(e.React)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(4),s=o(i),c=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={touched:!1,valid:!0,error:""},r}return u(t,e),l(t,[{key:"validate",value:function(e){if(this.props.validation){var t=null!=e?e:this.props.value,r=this.props.validation(t);return this.setState({touched:!0,valid:r.isValid,error:r.error}),r.isValid}return!0}},{key:"setValid",value:function(e,t,r){this.setState({touched:e,valid:t,error:r})}},{key:"_onBlur",value:function(e){this.validate()}},{key:"_onFocus",value:function(e){}},{key:"_onChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"render",value:function(){var e=this,t=!!this.props.value,r=t?"label-active":"",o=this.state.error?"is-error":"";return s.default.createElement("div",{className:"inner-text-holder "+o},s.default.createElement("input",{id:this.props.id,type:this.props.type,onChange:function(t){return e._onChange(t)},onFocus:function(t){return e._onFocus(t)},onBlur:function(t){return e._onBlur(t)},value:this.props.value,placeholder:this.props.placeholder,autoComplete:"off",autoFocus:this.props.autoFocus}),s.default.createElement("span",{className:"highlight"}),s.default.createElement("span",{className:"bar"}),s.default.createElement("label",{htmlFor:"rw_1_input",className:"ts ts-quick "+r},this.props.label),this.state.error&&s.default.createElement("span",{className:"error-label"},this.state.error))}}]),t}(s.default.Component);c.defaultProps={id:null,label:"",value:"",type:"text",placeholder:"",validation:null,onChange:function(){},containerClassName:"",inputClassName:"",labelClassName:"",errorClassName:"",autoFocus:!1},t.default=c},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=r(1),a=o(n);e.exports=a.default},function(t,r){t.exports=e}])});