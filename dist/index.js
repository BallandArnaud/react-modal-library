"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),o=a(t);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".reactModalLib{align-items:center;backdrop-filter:blur(2px);background:rgba(0,0,0,.3);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0}.reactModalLib__container{background:#fff;margin-inline:auto;max-width:80%;padding:15px 20px;position:relative}.reactModalLib__btnClose{align-items:center;background:#3d3d3d;border:none;border-radius:100%;cursor:pointer;display:flex;height:20px;justify-content:center;overflow:hidden;position:absolute;right:0;top:0;transform:translate(30%,-30%);transition:all .3s ease;width:20px}.reactModalLib__btnClose:focus,.reactModalLib__btnClose:hover{background:#000}.reactModalLib__btnClose svg{fill:#fff;transition:all .3s ease;width:100%}");const l=({className:e="",isModalOpen:t,setIsModalOpen:a,children:o})=>{if(!t)return null;const l=e=>{e.preventDefault(),a(!1)};return n.default.createElement("div",{className:`${e} reactModalLib`,tabIndex:-1,role:"dialog",onClick:e=>l(e)},n.default.createElement("div",{className:"reactModalLib__container",onClick:e=>e.stopPropagation()},n.default.createElement("button",{className:"reactModalLib__btnClose",onClick:e=>l(e)},n.default.createElement("svg",{width:"42",height:"42",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{d:"M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"}))),n.default.createElement("div",{className:"reactModalLib__content"},o)))};l.propTypes={className:o.default.string,isModalOpen:o.default.bool.isRequired,setIsModalOpen:o.default.func.isRequired,children:o.default.array},exports.Modal=l;
//# sourceMappingURL=index.js.map
