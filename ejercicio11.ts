interface Shape {
    area: () => number
}

class Circle implements Shape {
    radius: number
    constructor(radius: number) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}

const circle = new Circle(5)
console.log(circle.area())