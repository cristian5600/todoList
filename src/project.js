// import { form_module } from "./form.js";
export class Project{
    constructor(title,description,dueDate,low,medium,high){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.low = low;
        this.medium = medium;
        this.high = high;
        
    }
    getTitle(){
        return this.title;
    }
    show = function(){
        console.log(this);
    }
}
export const showProjects = ()=>{
    const BTN = document.getElementById(`show-projects`);
    BTN.addEventListener(`click`,()=>{
        document.getElementsByClassName(`info`)[0].innerHTML = ``;
        const info = document.getElementsByClassName(`info`)[0];
        console.log(`blessed`)
        const title = document.createElement(`div`);
        title.classList.add(`projects-title`);
        info.appendChild(title);
        title.innerHTML=`PROJECTS`;
        let condition = true;
        let projects = [];
         resetProjectsPanel();
        if(localStorage.getItem(`projects-index`)!= null)
            for(let i = 1; i <=  parseInt(localStorage.getItem(`projects-index`)); i++){
                let aux = JSON.parse(localStorage.getItem(`p-${i}`));
                console.log(aux);
                addProjectToElement(aux,info,`p-${i}`);
                
            }
    })
}
function addProjectToElement(project,element,id){
    const projectElement = document.createElement(`div`);
    projectElement.setAttribute(`id`,id);
    projectElement.classList.add(`project`);
    //element.prepend(projectElement);
    element.appendChild(projectElement);
    // projectElement.innerHTML = `something`;
    const wrapper = document.createElement(`div`);
    wrapper.classList.add(`wrapper`);
    projectElement.appendChild(wrapper);

    const title = document.createElement(`div`);
    title.classList.add(`project-title`);
    wrapper.appendChild(title);
    title.innerHTML = `Title: ` + project.title;

    const description = document.createElement(`p`);
    description.classList.add(`project-description`);
    wrapper.appendChild(description);
    description.innerHTML = `<br>  Description:  <br>  <br>` + 
    `  \t ` + project.description.slice(0,400)+ "...";

    const importance = document.createElement(`div`);
    importance.classList.add(`importance`);
    wrapper.appendChild(importance);
    if(project.low === true)
        importance.innerHTML = `Importance:low`;
    else if (project.medium = true)
        importance.innerHTML = `Importance:moderate`;
    else if (project.high = true)
        importance.innerHTML = `Importance:high`;
    
    const date = document.createElement(`div`);
    wrapper.appendChild(date);
    date.innerHTML = `<br> Due-date: ` + project.dueDate;
    console.log(project.due-date);

    const buttons = document.createElement(`div`);
    buttons.classList.add(`buttons`);
    projectElement.appendChild(buttons);

    const button1 = document.createElement(`button`);    
    const button2 = document.createElement(`button`);
    const button3 = document.createElement(`button`);
    button1.classList.add(`btn`);
    button1.classList.add(`edit`);
    button2.classList.add(`btn`);
    button2.classList.add(`remove`);
    button3.classList.add(`btn`);
    button3.classList.add(`view`);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
    buttons.appendChild(button3);
    button1.setAttribute(`id`,id);
    button2.setAttribute(`id`,id);
    button3.setAttribute(`id`,id);
    
    const btn1_i = document.createElement(`i`);
    btn1_i.classList.add(`fa`);
    btn1_i.classList.add(`fa-edit`);
    button1.appendChild(btn1_i);

    const btn2_i = document.createElement(`i`);
    btn2_i.classList.add(`fa`);
    btn2_i.classList.add(`fa-trash`);

    button2.appendChild(btn2_i);

    const btn3_i = document.createElement(`i`);
    btn3_i.classList.add(`fa`);
    btn3_i.classList.add(`fa-eye`);
    button3.appendChild(btn3_i);
    
    addProjectToPanel(project.title,id);
}
function addProjectToPanel(title,id){
    const btn = document.createElement(`div`);
    btn.classList.add(`button-48`);
    btn.classList.add(`special`);
    btn.setAttribute(`role`,`button`);
    btn.setAttribute(`id`,id);
    document.getElementsByClassName(`projects`)[0].appendChild(btn);
    const text = document.createElement(`span`);
    text.classList.add(`text`);
    btn.appendChild(text);
    text.innerHTML = title;
}
function resetProjectsPanel(){

    let elements = document.getElementsByClassName(`special`);
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }

}
function activateButtons(parent){

}
