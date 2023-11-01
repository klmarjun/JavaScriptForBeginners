let obj = {
    name:'Arjun',
    age:19,
    nested_obj:{
        nested_name:'Nested_Arjun',
        nested_age:'Nested_Age'
    }
}
for(let prop in obj){
    if(obj.hasOwnProperty(prop)){
        if (typeof obj[prop]==='object'){
            console.log(`Object name : ${prop}`);
            console.log(`Object value : ${obj['prop']}`);
        }
        else{
            console.log(`${prop} : ${obj['prop']}`);
        }
    }
}