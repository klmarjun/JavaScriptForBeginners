class Students{
    constructor(name, dep){
        this.name = name;
        this.dep = dep;
    }
    studDetails(){
        console.log(`Name: ${this.name} Department: ${this.dep}`);

}
}
const stud1 = new Students("John", "ECE");
stud1.studDetails();
const stud2 = new Students("Bob", "EEE");
stud2.studDetails();