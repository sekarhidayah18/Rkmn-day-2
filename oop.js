//Encasulation
//Inheritance
//Polymorphism
//Abstraction

// class Animal {
//     name
//     eat
//     canReproduce
//     breath
// }

// const Elephant = new Animal()
// console.log(Elephant);

// //Object
// class Animals {
//     constructor (name, eat, canReproduce, breath) {
//         this.name
//         this.eat
//         this.canReproduce
//         this.breath
//     }
        
// }

// const rabbit = new Animal()
// console.log(Elephant);

// class Animal {
//     constructor(name, food, energy, canReproduce) {
//         this.name = name;
//         this.food = food;
//         this.energy = energy;
//         this.canReproduce = canReproduce;
//     }
// }

// //const elephant = new Animal();
// const elephant = new Animal("Gajah", "Herbivora", 100, true);
// console.log(elephant);

//AGE BRO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ENCAPSULATION
class Animal {
    #age
    constructor(name, food, energy, canReproduce) {
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.canReproduce = canReproduce;
        this.#age = 20
    }
    //tell don't ask
    isAdult() {
        return this.#age > 18
    }
}

//const elephant = new Animal();
const elephant = new Animal("Gajah", "Herbivora", 100, true);
const tiger = new Animal("Macan", "Carnivora", 50, true);
tiger.name="tiger"
console.log(elephant.isAdult());
console.log(tiger);



//KTH BRO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class Animal {
    #kth
    constructor(name, food, energy, canReproduce) {
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.canReproduce = canReproduce;
        this.#kth = Math.random()
    }
    //tell don't ask
    kth() {
        return this.#kth
    }
}

//const elephant = new Animal();
const elephant = new Animal("Gajah", "Herbivora", 100, true);
const tiger = new Animal("Macan", "Carnivora", 50, true);
tiger.name="tiger"
console.log(elephant.kth());
console.log(tiger);