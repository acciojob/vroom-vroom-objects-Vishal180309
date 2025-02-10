class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model);
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

document.getElementById('create-car-button').addEventListener('click', function() {
    const car = new Car('Toyota', 'Corolla');
    document.getElementById('result').innerHTML = `Car: ${car.getMakeModel()}`;
});

document.getElementById('create-sports-car-button').addEventListener('click', function() {
    const sportsCar = new SportsCar('Ferrari', 'Testarossa', 200);
    document.getElementById('result').innerHTML = `Sports Car: ${sportsCar.getMakeModel()} - Top Speed: ${sportsCar.getTopSpeed()}mph`;
});