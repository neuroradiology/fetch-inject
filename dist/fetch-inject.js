/**
 * Copyright (c) 2017 Josh Habdas
 * @licence MIT
 */

var fetchInject=function(){"use strict";const e=function(e,t,n,o,c,r,i){r=t.createElement(n),i=t.getElementsByTagName(n)[0],r.appendChild(t.createTextNode(o)),r.onload=c,i.parentNode.insertBefore(r,i)},t=function(e,t,n,o,c,r,i){r=t.createElement(n),i=t.getElementsByTagName(n)[0],r.type="text/css",r.appendChild(t.createTextNode(o)),i.parentNode.insertBefore(r,i)};return function(n){const o=[],c=[],r=[];return n.forEach(e=>c.push(window.fetch(e).then(e=>{return[e.clone().text(),e.blob()]}).then(e=>{return Promise.all(e).then(e=>{o.push({text:e[0],type:e[1].type})})}))),Promise.all(c).then(()=>{return o.forEach(n=>{r.push({then:o=>{"application/javascript"===n.type?e(window,document,"script",n.text,o()):"text/css"===n.type&&(t(window,document,"style",n.text),o())}})}),Promise.all(r)})}}();