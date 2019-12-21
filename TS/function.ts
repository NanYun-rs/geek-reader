function add1(...rest: number[]): number;
function add1(...rest: string[]): string;
function add1(...rest: any): any {
  let first = rest[0];
}

// add1(1, 2, 3);
// add1("1", "2", 3);
