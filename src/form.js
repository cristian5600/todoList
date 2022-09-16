import { Project } from "./project.js";
import projects from "./index.js"
export const form_module = ()=>{
    /// console.log(getEventListeners(document.getElementById(`add_project`)));
    const BTNP = document.getElementById(`add_project`); // button for add project
    BTNP.addEventListener(`click`,activate);
};

const activate = ()=>{
    document.getElementsByClassName(`project-form`)[0].classList.toggle(`hidden`);
    form_activation();
};

const form_activation = ()=>{
    const project_form = document.forms[0];
    // project_form.addEventListener(`submit`,formEvent);
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
                project_form.removeEventListener((`submit`,formEvent));
            }
    }   
    project_form.addEventListener(`submit`,formEvent);
}
export function ProjectEdit(project){
    const project_form = document.forms[0];
    const formEventEdit = (e)=>{
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
            
           
            localStorage.setItem(project.id,
                JSON.stringify(aux));
            document.getElementsByClassName(`project-form`)[0].classList.add(`hidden`);
            
            // resetpage() 
            project_form.removeEventListener(`submit`,formEventEdit);
            project_form.submit();
        }
        
    }
    project_form.addEventListener(`submit`,formEventEdit);
}
export function projectEditView(project){
    const project_form = document.forms[0];
    // project_form.removeEventListener();
    const projectObject = JSON.parse(localStorage.getItem(project.id));
    document.getElementsByClassName(`project-form`)[0].classList.toggle(`hidden`);
    document.getElementById(`project-title`).value = projectObject.title;
    document.getElementById(`due-date`).value = projectObject.dueDate;
    document.getElementById(`description`).value = projectObject.description;
    
    if(projectObject.low === true)
        document.getElementById(`low`).checked = true;
    
    else if(projectObject.medium === true)
        document.getElementById(`medium`).checked = true;

    else if(projectObject.high === true)
        document.getElementById(`high`).checked = true;
    ProjectEdit(project);
}
