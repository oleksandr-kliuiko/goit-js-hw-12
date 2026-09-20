import{a as v,S,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="57660460-9b7a4de67f1bc51791b48e4e6",C="https://pixabay.com/api/";async function d(t,r){return(await v.get(C,{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function R(t){const{webformatURL:r,largeImageURL:s,tags:l,likes:e,views:o,comments:i,downloads:L}=t;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${r}" alt="${l}" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${e}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${o}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${i}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${L}
          </p>
        </div>
      </li>
    `}function f(t){const r=t.map(R).join("");m.insertAdjacentHTML("beforeend",r),P.refresh()}function B(){m.innerHTML=""}function y(){g.classList.remove("is-hidden")}function p(){g.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function w(){h.classList.add("is-hidden")}function M(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,left:0,behavior:"smooth"})}const $=document.querySelector(".form"),k=document.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more");let c="",a=1,u=0;$.addEventListener("submit",async t=>{t.preventDefault();const r=k.value.trim();if(r===""){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});return}c=r,a=1,B(),w(),y();try{const s=await d(c,a);if(u=s.totalHits,s.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});return}f(s.hits),a*15<u?b():n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"blue",messageColor:"white"})}catch(s){console.log(s),n.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"red",messageColor:"white"})}finally{p()}});O.addEventListener("click",async()=>{a+=1,w(),y();try{const t=await d(c,a);f(t.hits),M(),a*15<u?b():n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"yellow",messageColor:"white"})}catch(t){console.log(t)}finally{p()}});
//# sourceMappingURL=index.js.map
