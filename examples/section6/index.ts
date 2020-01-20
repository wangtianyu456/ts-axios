// class BeeKeeper {
//   hasMask: boolean
// }
//
// class LionKeeper {
//   nameTag: string
// }
//
// class Animal {
//   numLengs: number
// }
//
// class Bee extends Animal {
//   keeper: BeeKeeper
// }
//
// class Lion extends Animal {
//   keeper: LionKeeper
// }
//
// function createInstance<T extends Animal>(c: new() => T): T {
//   return new c();
// }
//
// createInstance(Lion).keeper.nameTag;
// createInstance(Bee).keeper.hasMask;
// createInstance(Lion).numLengs;

// 类型推断
let x = [0, 'wang', null];

class Animal {
  numLegs: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

// let zoo: Animal[] = [new Bee(), new Lion()];
// window.onmousedown = function (mouseEvent:any) {
//   console.log(mouseEvent.clickTime)
// };
function createZoo(): Animal[] {
  return [new Bee(), new Lion()];
}
