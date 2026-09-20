import{a as S,S as v,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const C="57660460-9b7a4de67f1bc51791b48e4e6",q="https://pixabay.com/api/";async function d(t,o){return(await S.get(q,{params:{key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const g=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function R(t){const{webformatURL:o,largeImageURL:s,tags:l,likes:e,views:r,comments:n,downloads:L}=t;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${o}" alt="${l}" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${e}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${r}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${n}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${L}
          </p>
        </div>
      </li>
    `}function y(t){const o=t.map(R).join("");g.insertAdjacentHTML("beforeend",o),P.refresh()}function k(){g.innerHTML=""}function f(){m.classList.remove("is-hidden")}function p(){m.classList.add("is-hidden")}function w(){h.classList.remove("is-hidden")}function b(){h.classList.add("is-hidden")}const B=document.querySelector(".form"),M=document.querySelector('input[name="search-text"]'),$=document.querySelector(".load-more");let c="",i=1,u=0;function I(){const t=document.querySelector(".gallery-item"),{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,left:0,behavior:"smooth"})}B.addEventListener("submit",async t=>{t.preventDefault();const o=M.value.trim();if(o===""){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});return}c=o,i=1,k(),b(),f();try{const s=await d(c,i);if(u=s.totalHits,s.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});return}y(s.hits),i*15<u?w():a.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"blue",messageColor:"white"})}catch(s){console.log(s),a.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"red",messageColor:"white"})}finally{p()}});$.addEventListener("click",async()=>{i+=1,b(),f();try{const t=await d(c,i);y(t.hits),I(),i*15<u?w():a.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"yellow",messageColor:"white"})}catch(t){console.log(t),a.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"red",messageColor:"white"})}finally{p()}});
//# sourceMappingURL=index.js.map
