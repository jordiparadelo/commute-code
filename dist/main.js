const m="modulepreload",E=function(t){return"/"+t},d={},h=function(n,r,c){let a=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");a=Promise.all(r.map(e=>{if(e=E(e),e in d)return;d[e]=!0;const s=e.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(!!c)for(let l=o.length-1;l>=0;l--){const u=o[l];if(u.href===e&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":m,s||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),s)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})}))}return a.then(()=>n()).catch(o=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o})};async function v(t){try{return await h(()=>import(`https://cdn.jsdelivr.net/gh/null/null@v1/src/components/${t}.js`),__vite__mapDeps([]))}catch(n){return console.error(`⚠️ Error importing ${t}:, ${n.message}`),null}}function _(t,n){const r=document.querySelector(t);if(!r)return;const c=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(c.disconnect(),v(n).then(e=>{e&&e.default()}))})});c.observe(r)}var g={VITE_GITHUB_USERNAME:"null",VITE_GITHUB_REPO_NAME:"null",VITE_IMPORT_URL:"https://cdn.jsdelivr.net/gh/null/null@v1/src/components/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};document.onLoad=S();function S(){console.log(g),Object.entries({"#noise":"noise",body:"initSmoothScrolling",body:"initTextAnimation",".work-item":"initFeaturedWorks",".headline_video":"loadAnimation"}).forEach(([n,r])=>{_(n,r)})}
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}