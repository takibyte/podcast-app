import{S as o,i as r,s as v,e as p,a as d,b as u,n as a,d as m}from"./vendor.3bae58bb.js";const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};q();function f(c){let s;return{c(){s=p("div"),s.innerHTML=`<h1 class="svelte-1q99nv">pode</h1> 

    
    <div class="container_two svelte-1q99nv"><div class="episode svelte-1q99nv"><div class="ep_img"><img src="public/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div> 
        <div class="episode svelte-1q99nv"><div class="ep_img"><img src="public/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div> 
        <div class="episode svelte-1q99nv"><div class="ep_img"><img src="public/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div> 
        <div class="episode svelte-1q99nv"><div class="ep_img"><img src="public/tds.jpeg" class="svelte-1q99nv"/></div> 
            <div class="ep_txt svelte-1q99nv"><span class="svelte-1q99nv">284 - Prozac Play-Doh</span> 
                <p class="svelte-1q99nv">Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p></div></div></div> 

    <div class="player svelte-1q99nv"><span class="btn svelte-1q99nv" style="line-height: 42px;">\u25B6\uFE0E</span></div> 
    <div class="tabs svelte-1q99nv"><span class="btn svelte-1q99nv">\u2756</span> 
        <span class="btn svelte-1q99nv">\u2756</span> 
        <span class="btn svelte-1q99nv">\u2756</span> 
        <span class="btn svelte-1q99nv">\u2756</span></div>`,d(s,"class","top_container svelte-1q99nv")},m(i,l){u(i,s,l)},p:a,i:a,o:a,d(i){i&&m(s)}}}class g extends o{constructor(s){super();r(this,s,null,f,v,{})}}new g({target:document.getElementById("app")});
