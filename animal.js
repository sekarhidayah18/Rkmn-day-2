class animal {
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

export default animal;