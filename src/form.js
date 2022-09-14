import { Project } from "./project.js";
import projects from "./index.js"
export const form_module = ()=>{

    const BTNP = document.getElementById(`add_project`); // button for add project
    BTNP.addEventListener(`click`,activate);

    form_activation();
};
const activate = ()=>{
    document.getElementsByClassName(`project-form`)[0].classList.toggle(`hidden`);
}
 /// export let projects = [];

const form_activation = ()=>{
    const project_form = document.forms[0];

    const formEvent = (e)=>{
        e.preventDefault();
        let aux = new Project(project_form.elements["project-title"].value,
        project_form.elements["description"].value,
        project_form.elements["due-date"].value);
        projects.push(aux);
         console.log(projects);
        

        
    
    }
    
    project_form.addEventListener(`submit`,formEvent); 
}

