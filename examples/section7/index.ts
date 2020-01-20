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

class Bird {
  fly() {
    console.log('bird fly')
  }

  layEggs() {
    console.log('bird layEggs')
  }
}

class Fish {
  swim() {
    console.log('Fish swim')
  }

  layEggs() {
    console.log('Fish layEggs')
  }
}

function getRandomPet(): Fish | Bird {
  return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getRandomPet();
// if (isFish(pet)) {
//   pet.swim()
// } else {
//   pet.fly()
// }

if (pet instanceof Bird) {
  pet.fly()
}

if (pet instanceof Fish) {
  pet.swim()
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
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

// function broken(name: string | null): string {
//   function postFix(epithet: string) {
//     return name!.charAt(0) + '. the ' + epithet
//   }
//
//   name = name || 'Bob';
//   return postFix(name)
// }

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // todo
    } else if (easing === 'ease-out') {
      // todo
    } else if (easing === 'ease-in-out') {
      // todo
    } else {
      // todo
    }
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');
// button.animate(0, 0, 'uneasy');
button.animate(0, 0, null);
