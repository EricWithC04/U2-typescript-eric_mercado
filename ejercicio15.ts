function identity<T>(a: T): T {
    return a
}

console.log(identity(2));
console.log(identity("Hola"));
console.log(identity(true));