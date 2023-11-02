//Object property name in Method
var msg = 'hello';
var obj = {
    msg,
    greet(name){
        console.log(`${this.msg} ${name}`);
    }
}
obj.greet('Arjun');