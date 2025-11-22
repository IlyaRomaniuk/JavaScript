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
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed = this.maximumSpeed + newSpeed;
    }
    this.changeYear = function (newYear) {
        this.yearOfManufacture = newYear;
    }
};
let toyotaCar = new Car ('toyota', 'japan',2025, '180 km/hours', '2.0L')
console.log(toyotaCar);
