const person={
    name:'ABC',
    age:19,
    location:{
        country:'India',
        city:'Chennai'
    }
}
const personInfo = (({name,age:personAge,location:{country:sourceCountry,city:homecity},intrestedIn='Learning',yearOfStudy = 2})=>{
    return{
        name,
        personAge,
        sourceCountry,
        homecity,
        intrestedIn,
        yearOfStudy
    };
})
console.log(personInfo(person));