class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    };
}
let cinderellas = [
    new Cinderella('maryna', 20, 31),
    new Cinderella('inna', 25, 32),
    new Cinderella('ira', 31, 33),
    new Cinderella('katya', 42, 34),
    new Cinderella('julia', 32, 35),
    new Cinderella('anna', 41, 36),
    new Cinderella('galya', 27, 37),
    new Cinderella('natasha', 53, 38),
    new Cinderella('angelina', 32, 39),
    new Cinderella('sofiya', 32, 40),
]
let prince = new Prince('Anton', 36, 36)
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        prince.wife = cinderella;
    }
}
let cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
prince.wife = cinderellaMain;
console.log(cinderellaMain);
