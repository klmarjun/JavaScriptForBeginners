//Computed Property Name
var language = 'JS';
//Traditional method
// var obj = {}
// obj[language]='JavaScript';
// console.log(obj);
//Modern
var obj = {
    [language]:'JavaScript'
}
console.log(obj);