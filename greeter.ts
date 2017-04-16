interface Person{
    name:string;
    age:number;
}
function getPersonInfo(person:Person):string{

    return person.name;
}
let person = {
    name:'jj',
    age:18
}
console.log(getPersonInfo(person));

class People{
    name:string;
    constructor(peeople:Person){
        this.name=peeople.name;
    }
}
let a = new People({name:'aa',age:11});
let b = new People({name:'bb',age:22});
