interface Person {
    firstName: string
    lastName?: string
}

const person: Person = {
    firstName: "Eric",
    lastName: "Mercado"
}

console.log(person);

const person2: Person = {
    firstName: "Brian"
}

console.log(person);