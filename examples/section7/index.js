// 交叉类型
// function extend<T, U>(first: T, second: U): T & U {
//   let result = {} as T & U;
//   for (const id in first) {
//     result[id] = first[id] as any
//   }
//   for (const id in second) {
//     if (!result.hasOwnProperty(id)) {
//       result[id] = second[id] as any
//     }
//   }
//   return result
// }
//
// class Person {
//   constructor(public name: string) {
//   }
// }
//
// interface Loggable {
//   log(): void
// }
//
// class ConsoleLogger implements Loggable {
//   log() {
//     // todo
//   }
// }
//
// let jim = extend(new Person('jim'), new ConsoleLogger());
//联合类型
// function padLeft(value: string, padding: string | number) {
//   if (typeof padding === 'number') {
//     return Array(padding + 1).join(' ') + value
//   }
//   if (typeof padding === 'string') {
//     return padding + value
//   }
//   throw new Error('Expected padding string or number but got' + `${typeof padding}`)
// }
//
// padLeft('Hello world', 4);
// padLeft('Hello world', 'wang');
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('bird fly');
    };
    Bird.prototype.layEggs = function () {
        console.log('bird layEggs');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('Fish swim');
    };
    Fish.prototype.layEggs = function () {
        console.log('Fish layEggs');
    };
    return Fish;
}());
function getRandomPet() {
    return Math.random() > 0.5 ? new Bird() : new Fish();
}
var pet = getRandomPet();
// if (isFish(pet)) {
//   pet.swim()
// } else {
//   pet.fly()
// }
if (pet instanceof Bird) {
    pet.fly();
}
if (pet instanceof Fish) {
    pet.swim();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
// function isNumber(x: any): x is number {
//   return typeof x === 'number'
// }
//
// function isString(x: any): x is string {
//   return typeof x === 'string'
// }
//
// function padLeft(value: string, padding: string | number) {
//   if (isNumber(padding)) {
//     return Array(padding + 1).join(' ') + value
//   }
//   if (isString(padding)) {
//     return padding + value
//   }
//   throw new Error('Expect padding is string or number but got ' + typeof padding)
// }
function f(x, y) {
    return x + (y || 0);
}
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C();
c.a = 12;
c.a = undefined;
c.a = null;
c.b = 13;
c.b = undefined;
c.b = null;
