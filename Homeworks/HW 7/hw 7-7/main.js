class Car {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    };
    info () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear (year) {
        if (year > 1815) this.yearOfManufacture = year;
    };
    addDriver (driver) {
        if (driver) this.driver = driver;
    };
}
let toyotaCar = new Car ('toyota', 'japan',2025, 180, '2.0L')
console.log(toyotaCar);

toyotaCar.drive();
toyotaCar.info();
toyotaCar.increaseMaxSpeed(100);
toyotaCar.changeYear(2000);
toyotaCar.addDriver({});
