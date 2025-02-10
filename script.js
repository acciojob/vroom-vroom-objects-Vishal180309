function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

document.getElementById('create-car-button').addEventListener('click', function() {
    const car = new Car('Toyota', 'Corolla');
    document.getElementById('result').innerHTML = 'Car: ' + car.getMakeModel();
});

document.getElementById('create-sports-car-button').addEventListener('click', function() {
    const sportsCar = new SportsCar('Ferrari', 'Testarossa', 200);
    document.getElementById('result').innerHTML = 'Sports Car: ' + sportsCar.getMakeModel() + ' - Top Speed: ' + sportsCar.getTopSpeed() + 'mph';
});