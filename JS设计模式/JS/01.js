const makeSound = animal => {
  animal.sound();
};
class Dog {
  sound() {
    console.log("wang wang wang");
  }
}
class Cat {
  sound() {
    console.log("miao miao miao");
  }
}
makeSound(new Dog());
makeSound(new Cat());
