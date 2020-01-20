type C = { a: string; b?: number };

function f({ a, b = 0 } = { a: "" }): void {}
// f({ c: 1, b: 2 });
