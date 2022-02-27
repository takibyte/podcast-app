import{S as o,i as r,s as v,e as p,a as d,b as m,n as l,d as u}from"./vendor.3bae58bb.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}};q();function f(c){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="svelte-1q99nv">pode</h1> 

    
    <div class="container_two svelte-1q99nv"><div class="episode svelte-1q99nv"><div class="ep_img"><img src="src/assets/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div> 
        <div class="episode svelte-1q99nv"><div class="ep_img"><img src="src/assets/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div> 
        <div class="episode svelte-1q99nv"><div class="ep_img"><img src="src/assets/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div> 
        <div class="episode svelte-1q99nv"><div class="ep_img"><img src="src/assets/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div></div> 

    <div class="player svelte-1q99nv"><span class="btn svelte-1q99nv" style="line-height: 42px;">\u25B6\uFE0E</span></div> 
    <div class="tabs svelte-1q99nv"><span class="btn svelte-1q99nv">\u2756</span> 
        <span class="btn svelte-1q99nv">\u2756</span> 
        <span class="btn svelte-1q99nv">\u2756</span> 
        <span class="btn svelte-1q99nv">\u2756</span></div>`,d(e,"class","top_container svelte-1q99nv")},m(i,n){m(i,e,n)},p:l,i:l,o:l,d(i){i&&u(e)}}}class g extends o{constructor(e){super();r(this,e,null,f,v,{})}}new g({target:document.getElementById("app")});
