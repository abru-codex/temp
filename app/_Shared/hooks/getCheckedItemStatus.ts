//@ts-nocheck
const checkCheckbox = (id: any) => {
  let checkbox = document.getElementById(id);
  return checkbox?.checked;
};
export default checkCheckbox;
