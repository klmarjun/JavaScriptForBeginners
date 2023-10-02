const obj = {
    name:'Arjun',
    age:20,
    isHacker:false,
}
const{name,...info} = obj
console.log(name)
console.log(info)