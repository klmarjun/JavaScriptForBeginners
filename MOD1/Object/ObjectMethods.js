let obj = {
    name:'Arjun',
    age:19,
    greet: function greet(){
        console.log(`Hello ${this.name}`);
    }
}
obj.greet();