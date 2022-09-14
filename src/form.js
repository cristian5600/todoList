export const form_module = ()=>{
    const BTNP = document.getElementById(`add_project`); // button for add project
    BTNP.addEventListener(`click`,activate);


};
const activate = ()=>{
    document.getElementsByClassName(`project-form`)[0].classList.toggle(`hidden`);
}