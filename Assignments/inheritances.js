// class Animal {
//     constructor(name) { 
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);  // Now this works!
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`${this.name} is barking`);
//     }
// }

// const myDog = new Dog("Buddy", "Golden Retriever");
// myDog.eat();  
// myDog.bark(); 
// class LivingBeing {
//     constructor(name) {  // Add constructor
//         this.name = name;
//     }
//     breathe() {
//         console.log(`${this.name} is breathing`);
//     }
// }

// class Animal extends LivingBeing {
//     constructor(name) {  // Add constructor
//         super(name);
//     }
//     move() {
//         console.log(`${this.name} is moving`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {  // Add constructor
//         super(name);
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`${this.name} is barking`);
//     }
// }

// // ✅ CREATE INSTANCE AND CALL METHODS
// const myDog = new Dog("Buddy", "Golden Retriever");
// myDog.breathe();  // Buddy is breathings
// myDog.move();     // Buddy is moving
// myDog.bark();     // Buddy is barking
//Hierarcheal

// class Bird {
//     constructor(name) {  // ✅ Add constructor
//         this.name = name;
//     }
//     fly() {
//         console.log(`${this.name} is flying`);
//     }
// }

// class Sparrow extends Bird {
//     constructor(name) {  // ✅ Add constructor
//         super(name);
//     }
//     chirp() {
//         console.log(`${this.name} is chirping`);
//     }
// }

// class Eagle extends Bird {
//     constructor(name) {  // ✅ Add constructor
//         super(name);
//     }
//     hunt() {
//         console.log(`${this.name} is hunting`);
//     }
//     // Method Overriding
//     fly() {
//         console.log(`${this.name} is soaring high`);
//     }
// }

// // ✅ CREATE INSTANCES AND CALL METHODS


// const sparrow = new Sparrow("Jack");
// const eagle = new Eagle("Sky");

// // Sparrow methods
// sparrow.fly();    // Jack is flying (from Bird)
// sparrow.chirp();  // Jack is chirping (from Sparrow)

// console.log(); // Empty line

// // Eagle methods
// eagle.fly();     // Sky is soaring high (overridden)
// eagle.hunt();    // Sky is hunting (from Eagle)


// //multiple
// Define Mixin
// Mixin 1
// const CanSwim = {
//     swim() {
//         console.log(`${this.name} is swimming`);
//     },
//     dive() {
//         console.log(`${this.name} is diving`);
//     }
// };

// // Mixin 2
// const CanFly = {
//     fly() {
//         console.log(`${this.name} is flying`);
//     },
//     land() {
//         console.log(`${this.name} is landing`);
//     }
// };

// // Mixin 3
// const CanWalk = {
//     walk() {
//         console.log(`${this.name} is walking`);
//     },
//     run() {
//         console.log(`${this.name} is running`);
//     }
// };

// // Class
// class Duck {
//     constructor(name) {
//         this.name = name;
//     }
//     quack() {
//         console.log(`${this.name} says Quack!`);
//     }
// }

// // Apply multiple mixins
// Object.assign(Duck.prototype, CanSwim, CanFly, CanWalk);

// // Use it
// const duck = new Duck("Donald");
// duck.swim();   // Donald is swimming
// duck.fly();    // Donald is flying
// duck.walk();   // Donald is walking
// duck.quack();  // Donald says Quack!
// ===== MULTILEVEL INHERITANCE =====
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Bird extends Animal {
    chirp() {
        console.log(`${this.name} is chirping`);
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

// ===== MIXINS (For Multiple Inheritance) =====
const CanSwim = {
    swim() {
        console.log(`${this.name} is swimming`);
    }
};

const CanHunt = {
    hunt() {
        console.log(`${this.name} is hunting`);
    }
};

// ===== HYBRID CLASS =====
// Combines: Multilevel (Animal → Bird → FlyingBird) + Mixins (CanSwim + CanHunt)
class Duck extends FlyingBird {
    constructor(name) {
        super(name);
    }
    quack() {
        console.log(`${this.name} says Quack!`);
    }
}

// Apply mixins
Object.assign(Duck.prototype, CanSwim, CanHunt);

// ===== TEST =====
const duck = new Duck("Donald");
console.log("=== HYBRID INHERITANCE ===");
duck.eat();    // From Animal
duck.chirp();  // From Bird
duck.fly();    // From FlyingBird
duck.swim();   // From CanSwim (Mixin)
duck.hunt();   // From CanHunt (Mixin)
duck.quack();  // From Duck