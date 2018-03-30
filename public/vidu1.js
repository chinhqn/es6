ReactDOM.render(<h1>REACT JS QUOC CHINH</h1>, document.getElementById('root'));
// function Person(name, age) {
//     this.age = age;
//     this.name = name;
// }
// var p1 = new Person('Khoapham', 2);
// console.log(p1);

class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    sayHello (){
        return "xin chao toi la " + this.name + "nam nay" + this.age + 'tuoi';
    }
}
class Child extends Person {
    constructor(name, age, hobby){
        this.hobby = hobby;
    }
    sayHello(){
        return "xin chao toi la " + this.name + "nam nay" + this.age + 'tuoi';
    }
}
var p2 = new Person ('Quoc chinh', 24);
var aChild = new Child ('teo', 2, 'may bay');
// console.log(p2.sayHello());
console.log(aChild.sayHello());
