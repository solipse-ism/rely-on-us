import { filterBtn, optionBtn } from "../component.js";

let currentCourse;
let currentOption;
optionBtn(updatedOption => {
  currentOption = updatedOption;
});