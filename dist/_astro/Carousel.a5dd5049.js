import{r as _}from"./index.ed373d49.js";const g="_mediaScroller_1620m_3",v="_mediaElement_1620m_83",y="_mediaImage_1620m_121",x="_snapsInline_1620m_135",I="_OverlayImage_1620m_155",o={mediaScroller:g,"media-scroller--with-groups":"_media-scroller--with-groups_1620m_63","media-group":"_media-group_1620m_71",mediaElement:v,mediaImage:y,snapsInline:x,OverlayImage:I};var d={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=_,O=Symbol.for("react.element"),S=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,j=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function f(n,e,t){var r,a={},l=null,i=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)h.call(e,r)&&!E.hasOwnProperty(r)&&(a[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:O,type:n,key:l,ref:i,props:a,_owner:j.current}}c.Fragment=S;c.jsx=f;c.jsxs=f;d.exports=c;var s=d.exports;const w=()=>{const n=["franks-1","franks-2","franks-3","franks-4","franks-5","franks-6","franks-7","franks-8","franks-9","franks-10"],[e,t]=_.useState(""),[r,a]=_.useState(!1),l=m=>{t(m.currentTarget.alt),a(!0)},i=m=>{a(!1),setTimeout(()=>{t("")},500)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:`${o.mediaScroller} ${o.snapsInline}`,children:[n.map((m,p)=>s.jsx("div",{className:o.mediaElement,children:s.jsx("img",{className:o.mediaImage,src:"./"+m+".webp",alt:m+".webp",onClick:u=>{l(u)}})},p)),s.jsxs("div",{className:`menu ${r&&"showMenu"}`,children:[s.jsx("img",{className:o.OverlayImage,src:"./"+e,alt:"This is a item image on big screen"}),s.jsx("button",{onClick:i,className:"button",children:"X"})]})]})})};export{w as default};
