!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n        <div class="header_logo">\n            <a href="/">\n                <img src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e" alt="logo Rick and morty"/>\n            </a>\n        </div>\n        <h1>Characters Guide</h1>\n        <nav class="header_nav">\n            <a href="/">\n                Home\n            </a>\n            <a href="#/about/">\n                About\n            </a>\n        </nav>';const r="https://rickandmortyapi.com/api/character/";var s=async n=>{const e=n?`${r}${n}`:r;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};var i=async()=>{const n=await s();let e=[];for(let a=1;a<=n.info.pages;a++)e.push(a);let a=0;return`\n        <h6>Pages</h6>\n        <div>\n            ${e.map(()=>`<a href="#/?page=${a++}/">${a}</a>`).join("")}\n        </div>`};var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=()=>'\n    <div class="error404">\n        <h2>Error no se encontro el personaje</h2>\n    </div>';var l=async()=>{const n=await c();return`\n      <div class="characters">\n        ${(await s(n)).results.map(n=>`\n          <article class="character_item">\n            <a href="#/${n.id}/">\n              <img src="${n.image}" alt="${n.name}">\n              <div class="character_name"><h2>${n.name}</h2><p>${n.species}</p></div>\n            </a>\n          </article>\n        `).join("")}\n      </div>\n    `};var d=n=>{if("about"!=n){if("/"===n)return n;if(n.length<=3)return"/:id";if(n.includes("page"))return"/:pages"}return"/"+n};const u={"/":l,"/:id":async()=>{const n=c(),e=await s(n);return`\n    <div class="character_inner">\n        <article class="character_card">\n            <img class="${e.status} status_life" src="${e.image}" alt="${e.name}">\n        </article>\n        <article class="character_card">\n            <div class="character_card-status">\n                <h2>${e.name} <span class="${e.status}">❤ </span><span>${e.status}</span></h2>\n                <h3>Episodes: <span>${e.episode.length}</span></h3>\n                <h3>Species: <span>${e.species}</span></h3>\n                <h3>Gender: <span>${e.gender}</span></h3>\n                <h3>Origin: <span>${e.origin.name}</span></h3>\n                <h3>Last location: <span>${e.location.name}</span></h3>\n            </div>\n        </article>\n    </div>`},"/contact":"Contact","/:pages":l};var p=async()=>{const n=document.getElementById("header"),e=document.getElementById("content"),a=document.getElementById("footer");let r=c(),s=await d(r),l=u[s]?u[s]:o;n.innerHTML=await t(),a.innerHTML=await i(),e.innerHTML=await l()};window.addEventListener("load",p),window.addEventListener("hashchange",p)}]);