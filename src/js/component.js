import { swapClass } from "./utils.js";

function findActiveClass(components, cssName){
  const componentArray = Array.from(components);
  return componentArray.find(component => component.classList.contains(`${cssName}-active`));
}

function makeInvisible(cssName){
  cssName.classList.remove("visible");
  cssName.classList.add("invisible");
}

function resetInvisible(){
  const ks3 = document.querySelectorAll(".ks3");
  const igcse = document.querySelectorAll(".igcse");
  const iasIal = document.querySelectorAll(".ias-ial");
  const sat = document.querySelectorAll(".sat");
  const ielts = document.querySelectorAll(".ielts");
  if (ks3) ks3.forEach(btn => makeInvisible(btn));
  if (igcse) igcse.forEach(btn => makeInvisible(btn));
  if (iasIal) iasIal.forEach(btn => makeInvisible(btn));
  if (sat) sat.forEach(btn => makeInvisible(btn));
  if (ielts) ielts.forEach(btn => makeInvisible(btn));
}

export function optionBtn(callback, className){
  filterBtn(updatedCourse => {
    className = updatedCourse.id;
    resetInvisible();
    const optionBtn = document.querySelectorAll(`.${className}`)
    if (!optionBtn) {resetInvisible(); return;}
    const defaultActiveBtn = document.querySelector(".resource__subjects__filter--default");
    if (!defaultActiveBtn.classList.contains("resource__subjects__filter--active")){
      const activeBtn = document.querySelector(".resource__subjects__filter--active");
      activeBtn.classList.remove("resource__subjects__filter--active");
      defaultActiveBtn.classList.add("resource__subjects__filter--active");
    
    }
    optionBtn.forEach(btn => {
      btn.classList.remove("invisible");
      btn.classList.add("visible");
      btn.onclick = () => {
        if(btn.classList.contains("resource__subjects__filter--active"))return;
        const activeBtn = document.querySelector(".resource__subjects__filter--active");
        swapClass(activeBtn, btn, "resource__subjects__filter-");
        const currentOption = document.querySelector(".btn--filter-active");
        callback(currentOption); // Pass the updated value to the callback
      }
      btn.addEventListener("keyup", (e) => {
        if(e.keyCode === 13 || e.keyCode === 32){
          if(btn.classList.contains("resource__subjects__filter--active"))return;
          const activeBtn = document.querySelector(".resource__subjects__filter--active")
          console.log(activeBtn);
          swapClass(activeBtn, btn, "resource__subjects__filter-");
          const currentOption = document.querySelector(".btn--filter-active");
          callback(currentOption); // Pass the updated value to the callback
        }
      })
    })
  });
}
export function filterBtn(callback){
  const filterBtn = document.querySelectorAll(".btn--filter");
  const filterBtnName = "btn--filter"
  filterBtn.forEach(btn => {
    btn.onclick = () => {
      if(!!btn.classList[2]){
        const currentCourse = document.querySelector(".btn--filter-active");
        currentCourse.classList.remove("btn--filter-active");
        callback(currentCourse + "."); // Pass the updated value to the callback
        return;
      };
      const activeBtn = findActiveClass(filterBtn, filterBtnName);
      swapClass(activeBtn, btn, filterBtnName);
      const currentCourse = document.querySelector(".btn--filter-active");
      callback(currentCourse); // Pass the updated value to the callback
    }
    btn.addEventListener("keyup", (e) => {
      if(e.keyCode === 13 || e.keyCode === 32){
        if(!!btn.classList[2])return;
        const activeBtn = findActiveClass(filterBtn, filterBtnName);
        swapClass(activeBtn, btn, filterBtnName);
        const currentCourse = document.querySelector(".btn--filter-active");
        callback(currentCourse); // Pass the updated value to the callback
      }
    })
  })
}