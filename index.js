import animal from "./animal.js";
import Mammal from "./Mammal.js";

const elephant = new animal("Gajah", "Herbivora", 100, true);
const tiger = new animal("Macan", "Carnivora", 50, true);
const orangutan = new Mammal("Orangutan", "Omnivora", 200, false);

console.log(orangutan);