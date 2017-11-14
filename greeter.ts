class Student{
    fullName:string;
    constructor(public firstName,public middleInitial, public lastName){
        this.fullName= firstName+" "+ middleInitial+""+lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person : Person){
    return "Hello, "+person.firstName+"-"+ person.lastName;
}

var user= new Student("Yingping","-","Zhou")

document.body.innerHTML= greeter(user);