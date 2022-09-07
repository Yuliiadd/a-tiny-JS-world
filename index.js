class LivingBeing {
   constructor(species, name, gender, saying) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.saying = saying;
      this.properties = ['species','name','gender','saying'];
   };

   showProperties() {
      return this.properties.map(prop => this[prop]).join('; ');
   }
};

class Human extends LivingBeing {
   constructor(name, gender, saying) {
      super("Human", name, gender, saying);
      this.legs = 2;
      this.hands = 2;
   };

   showProperties() {
      return super.showProperties() + `; ${this.legs}; ${this.hands}`;
   };
};

class Animal extends LivingBeing {
   constructor(species, name, gender, saying) {
      super(species, name, gender, saying);
      this.legs = 4;
   };

   showProperties() {
      return super.showProperties() + `; ${this.legs}`;
   }
};

class Cat extends Animal {
   constructor(name, gender) {
      super("Kitty", name, gender, "Meooow!");

   };
};

class Dog extends Animal {
   constructor(name, gender) {
      super("Puppy", name, gender, "Woof!");
   };
};

class CatWoman extends Cat {
   constructor(name) {
      super(name, "Female");
      this.species = "Cat-woman";
      this.legs = 2;
      this.hands = 2;
   };

   showProperties() {
      return super.showProperties() + `; ${this.hands} `;
   }
};

const 
man = new Human('Joe', 'male', 'How you doing?'),
woman = new Human('Monica', 'female', 'I know!'),
cat = new Cat('Taras', 'male'),
dog = new Dog('Chappy', 'male'),
catWoman = new CatWoman('Halle Berry'),
livingBeings = [man, woman, cat, dog, catWoman];

livingBeings.forEach(item => {
   print(item.showProperties());
});
