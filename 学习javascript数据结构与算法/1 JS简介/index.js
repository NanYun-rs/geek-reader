// == valueOf 权重更高
let shadowEqal = {
  valueOf: () => 1,
  toString: () => 2
};

console.log(shadowEqal == 1);

