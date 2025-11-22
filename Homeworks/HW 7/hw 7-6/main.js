function Car (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed}`);
    }
}
let toyotaCar = new Car ('toyota', 'japan',2025, '180 km/hours', '2.0L')
console.log(toyotaCar);

toyotaCar.drive();