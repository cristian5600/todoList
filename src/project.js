export class Project{
    constructor(title,description,dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    show = function(){
        console.log(this);
    }
}

