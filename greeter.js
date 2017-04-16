function getPersonInfo(person) {
    return person.name;
}
var person = {
    name: 'jj',
    age: 18
};
console.log(getPersonInfo(person));
var People = (function () {
    function People(peeople) {
        this.name = peeople.name;
    }
    return People;
}());
var a = new People({ name: 'aa', age: 11 });
var b = new People({ name: 'bb', age: 22 });
