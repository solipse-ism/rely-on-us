(()=>{function n(t,r,s){let c=s+"-active";r.classList.add(c),t&&t.classList.remove(c)}function a(t,r){return Array.from(t).find(c=>c.classList.contains(`${r}-active`))}function l(t){t.classList.remove("visible"),t.classList.add("invisible")}function f(){let t=document.querySelectorAll(".ks3"),r=document.querySelectorAll(".igcse"),s=document.querySelectorAll(".ias-ial"),c=document.querySelectorAll(".sat"),i=document.querySelectorAll(".ielts");t&&t.forEach(e=>l(e)),r&&r.forEach(e=>l(e)),s&&s.forEach(e=>l(e)),c&&c.forEach(e=>l(e)),i&&i.forEach(e=>l(e))}function _(t,r){d(s=>{r=s.id,f();let c=document.querySelectorAll(`.${r}`);if(!c){f();return}let i=document.querySelector(".resource__subjects__filter--default");i.classList.contains("resource__subjects__filter--active")||(document.querySelector(".resource__subjects__filter--active").classList.remove("resource__subjects__filter--active"),i.classList.add("resource__subjects__filter--active")),c.forEach(e=>{e.classList.remove("invisible"),e.classList.add("visible"),e.onclick=()=>{if(e.classList.contains("resource__subjects__filter--active"))return;let o=document.querySelector(".resource__subjects__filter--active");n(o,e,"resource__subjects__filter-");let u=document.querySelector(".btn--filter-active");t(u)},e.addEventListener("keyup",o=>{if(o.keyCode===13||o.keyCode===32){if(e.classList.contains("resource__subjects__filter--active"))return;let u=document.querySelector(".resource__subjects__filter--active");console.log(u),n(u,e,"resource__subjects__filter-");let v=document.querySelector(".btn--filter-active");t(v)}})})})}function d(t){let r=document.querySelectorAll(".btn--filter"),s="btn--filter";r.forEach(c=>{c.onclick=()=>{if(c.classList[2]){let o=document.querySelector(".btn--filter-active");o.classList.remove("btn--filter-active"),t(o+".");return}let i=a(r,s);n(i,c,s);let e=document.querySelector(".btn--filter-active");t(e)},c.addEventListener("keyup",i=>{if(i.keyCode===13||i.keyCode===32){if(c.classList[2])return;let e=a(r,s);n(e,c,s);let o=document.querySelector(".btn--filter-active");t(o)}})})}var m;_(t=>{m=t});})();
