function Car (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed}`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }    
    };
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) this.maximumSpeed = this.maximumSpeed + speedToAdd;
    };
    this.changeYear = function (year) {
        if (year > 1815) this.yearOfManufacture = year;
    };
    this.addDriver = function (driver) {
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
