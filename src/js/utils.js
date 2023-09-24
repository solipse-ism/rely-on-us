export function swapClass(target, swapTarget, className){
  const activeName = className + `-active`;
  swapTarget.classList.add(activeName);
  if(!target) return;
  target.classList.remove(activeName);
}