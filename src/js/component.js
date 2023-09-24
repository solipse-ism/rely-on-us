import { swapClass } from "./utils.js";

function findActiveClass(components, cssName){
  const componentArray = Array.from(components);
  return componentArray.find(component => component.classList.contains(`${cssName}-active`));
}

export default function component(){
  const filterBtn = document.querySelectorAll(".btn--filter");
  const filterBtnName = "btn--filter"
  filterBtn.forEach(btn => {
    btn.onclick = () => {
      if(!!btn.classList[2])return;
      const activeBtn = findActiveClass(filterBtn, filterBtnName);
      console.log(activeBtn);
      swapClass(activeBtn, btn, filterBtnName);
    }
    btn.addEventListener("keyup", (e) => {
      if(e.keyCode === 13){
        if(!!btn.classList[2])return;
        const activeBtn = findActiveClass(filterBtn, filterBtnName);
        console.log(activeBtn);
        swapClass(activeBtn, btn, filterBtnName);
      }
    })
  })
}