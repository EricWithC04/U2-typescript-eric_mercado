import Car from "./ejercicio7_8_9";

class ElectricCar extends Car {
    batteryLife: number
    constructor(mark: string, batteryLife: number) {
        super(mark)
        this.batteryLife = batteryLife
    }

    charge() {
        console.log("El coche se está cargando...");
    }
}

const car = new ElectricCar("Toyota", 70);
car.drive();
car.charge();
