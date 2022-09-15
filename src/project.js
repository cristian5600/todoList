export class Project{
    constructor(title,description,dueDate,low,medium,high){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.low = low;
        this.medium = medium;
        this.high = high;
        
    }
    show = function(){
        console.log(this);
    }
}
export const resetProjects = ()=>{
    
}

