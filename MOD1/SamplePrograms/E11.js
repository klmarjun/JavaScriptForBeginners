//Create an object called Employee with the properties

// ‘name’ ( String)
// ‘age’ (number)
// ‘position’ (String)
// ‘Salary’ (number)
// ‘contact’ (String)
// ‘workDays’ (array)
// ‘getEmployeeInfo’ (Object Method)
// The values are given as: John, 28, Cashier, 38000, john.relstore.com, [Monday, Wednesday, Friday].
// The method should return John works as a cashier and earns 38000 per month

let Employee = {
    name:'John',
    age:28,
    position:'Cashier',
    Salary:38000,
    contact:'john.relstore.com',
    workDays:['Monday', 'Wednesday', 'Friday'],
    getEmployeeInfo: function(){
        return `${this.name} works as a ${this.position} and earns ${this.Salary} per month`;
    }
}
console.log(Employee.getEmployeeInfo());