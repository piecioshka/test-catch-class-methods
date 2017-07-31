class Test {
    foo() {
        console.log('foo');
    }
}

function A() {}
Object.assign(A.prototype, Test.prototype);

// 1 way
Object.defineProperties(A.prototype, Object.getOwnPropertyDescriptors(Test.prototype));

// 2 way
// Object.getOwnPropertyNames(Test.prototype).forEach((property) => {
//     Object.defineProperty(A.prototype, property, Object.getOwnPropertyDescriptor(Test.prototype, property));
// });

let a = new A;
console.log(a);

try {
    a.foo();
} catch (e) {
    console.error(e);
}

console.log(Test.prototype);
