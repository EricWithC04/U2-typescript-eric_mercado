class Car {
    private mark: string
    constructor(mark: string) {
        this.mark = mark
    }

    drive() {
        console.log(`Driving a ${this.mark}`);
    }

    getMark() {
        return this.mark
    }
}

const car = new Car("Toyota");
car.drive();
console.log(car.getMark());

export default Car