const default1 = {theme:"light",fontsize:14};
const user = {fontsize:16};
//traditional way
const trad = object.assign({},default1,user);
console.log(trad);
//spread operator
const Eobj = {...default1,...user};
console.log(Eobj);
