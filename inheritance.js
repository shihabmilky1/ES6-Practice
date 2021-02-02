class FatherName {
    constructor(name){
       this.FatherName = 'Jahangir Milky'; 
    }
};
class Child extends FatherName {
    constructor(name){
        super();
        this.name = name;
    }
};

const baby = new Child('Shihab');
const baby2 = new Child('GunGun');
console.log(baby,baby2);