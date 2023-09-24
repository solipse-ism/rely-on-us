import { filterBtn, optionBtn } from "../component.js";

document.addEventListener("DOMContentLoaded", () =>{
  let currentCourse;
  let currentOption;
  optionBtn(updatedOption => {
    currentOption = updatedOption;
  });
})