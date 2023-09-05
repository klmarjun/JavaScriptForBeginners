var person = {
        name: "Sai",
        age: 20,
        gender: 'Male',
        isStudent: true,
        greet: function(){
            console.log("Hello "+this.name+" your age is "+this.age);
        }
    };
    var personName = person.name;
    person.city = "Hyderabad";
    person.age = person.age + 5;
    for(var key in person){
        console.log(key+" : "+person[key]);
    }
    var address = {
        street: "xyz",
        postalCode: "123"
    };
    var postC = address.postalCode;
    console.log(postC);
    person.address = address;
    console.log(person.address.postalCode);
    person.greet();
    console.log(personName);
    console.log(person.age);
