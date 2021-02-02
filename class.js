class student{
    constructor(sId, name){
        this.id = sId;
        this.name = name;
        this.school = 'Dutt High School';
    }
}
const student1 = new student(22,'Shihab');
const student2 = new student(12,'Foysal');
console.log(student1.id,student2.id);