import { Project } from "./project.js";
import projects from "./index.js"
export const form_module = ()=>{
    /// console.log(getEventListeners(document.getElementById(`add_project`)));
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
        if( (   project_form.elements["low"].checked +
            project_form.elements["medium"].checked+
            project_form.elements["high"].checked > 1 )
                            ||
            (   project_form.elements["low"].checked +
            project_form.elements["medium"].checked+
            project_form.elements["high"].checked 
                            === 0   )){
                alert(`Incorect sellection of importance!`)
            }
            else{
                let aux = new Project(project_form.elements["project-title"].value,
                    project_form.elements["description"].value,
                    project_form.elements["due-date"].value,
                    project_form.elements["low"].checked,
                    project_form.elements["medium"].checked,
                    project_form.elements["high"].checked);
                    
                // projects.push(aux); NU MERGE
                console.log(aux);
                if(localStorage.getItem(`projects-index`) === null)
                    localStorage.setItem(`projects-index`,1);
                else
                    localStorage.setItem(`projects-index`,
                        parseInt(localStorage.getItem(`projects-index`))+1)
                localStorage.setItem(
                    `p-${parseInt(localStorage.getItem(`projects-index`))}`,
                    JSON.stringify(aux));
                document.getElementsByClassName(`project-form`)[0].classList.add(`hidden`);
                
                // resetpage() 
                project_form.submit();
                
            }
    }
    
    project_form.addEventListener(`submit`,formEvent); 
}

