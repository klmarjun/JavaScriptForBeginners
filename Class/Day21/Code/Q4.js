function vehicle(name){
    this.name = name;
    this.vehtype = function(){
        return `Hello, this is a ${this.name}`
    }
}
const V = new vehicle("car");

console.log(V.name);
console.log(V.vehtype());