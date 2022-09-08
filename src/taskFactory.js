export const task = ()=>{
    const variable = 32;
    //constructor
    //      At a minimum they should have a title, 
    // description, dueDate and priority.
    // You might also want to include notes or even a checklist.
    function constructor(){
        console.log(variable);
        console.log(`hello`);
    }
    const constructor2 = ()=>{
       // console.log(this.variable);
    }
    return{constructor,constructor2};
}