class Wallet {
  private id: number;
  private createTime: number;
  private balance: number;
  private balanceLastModifiedTime: number;
  constructor() {
    this.id = Math.random();
    this.createTime = Date.now();
    this.balance = 0;
    this.balanceLastModifiedTime = Date.now();
  }

  public getId = () => this.id;
  public getCreateTime = () => this.createTime;
  public getBalance = () => this.balance;
  public getModifiedTime = () => this.balanceLastModifiedTime;

  public increaseBalance: (balance: number) => void = balance => {
    this.balance = balance;
    this.balanceLastModifiedTime = Date.now();
  };

  public decreaseBalance: (balance: number) => void = balance => {
    this.balance = balance;
    this.balanceLastModifiedTime = Date.now();
  };
}

interface Animal {
  foot: () => number;
  isAlive: () => boolean;
}

class Dog implements Animal {
  public foot = () => 10;
  public isAlive = () => true;
}

interface Iteration {
  hasNext: () => string;
  next: () => string;
  remove: () => string;
}

class ArrayIterate implements Iteration {
  hasNext = () => "1";
  next = () => "2";
  remove = () => "3";
}

class LinkIterate implements Iteration {
  hasNext = () => "5";
  next = () => "6";
  remove = () => "7";
}

class Cat {
  say = () => console.log("say cat");
}

class Duck {
  say = () => console.log("say duck");
}

const animailSay = (animal: any) => animal.say();

const test = () => {
  let c = new Cat();
  let d = new Duck();
  animailSay(c);
  animailSay(d);
};

test()
