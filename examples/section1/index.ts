let someValue: any = 'this is a string';
// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
