var day = "monday";
let month = "January";
const year = "2025";

let firstName = "";
let fullName = "Sehay Hay";
let lastName = "Hay";
let middleName = '${fullName}';

// Declaration
let vehicle;
// Assignment
vehicle = "Mobil";
// Reassignment
vehicle = "car";

const phi = 3.14;

//boolean
const isMale = true;

//null
const jet = null;

//undefined
let shirts = undefined;

//return value = boolean
const isOne = 1 == "1"

//typeof
const isString = typeof (NaN)

//menjalankan sesuatu
function printName() {
    console.log(fullName)
}

//return sesuatu
function getName() {
    return (fullName)
}
let namaKu = getName()
//console.log(namaKu);

//write a code to calculate the BMI of a person who weight 60kg and 170 cm heigth
let beratBadan = 46
let tinggiBadan = 154
let bmi = beratBadan / ((tinggiBadan / 100) ** 2);

//console.log(bmi)

function getBMI(beratBadan, tinggiBadan) {
    return bmi;
}

//console.log(getBMI(60, 170));

let z = 0;
let x = 1;
const y = 2;
//console.log(x--);
//console.log(--x);

let hariIni = "hujan"

/*if (hariIni === "hujan"){
    console.log("bawa payung")
} else {
    console.log("naik gojek")
}

const naikMotoro = hariIni === "hujan ?" console.log("bawa payung") : console.log("naik gojek")

if (hariIni !== "hujan"){
    
} */


/* function ngajarKah(){
    if (hariIni !== "hujan") {
        return "Ngajar"
    } else {
        return "Main Game"
    }
}

console.log(ngajarKah())*/

/*function ngajarKah(){
    if (hariIni === "hujan") {
        return "Ngajar"
    } else if (hariIni === "panas") {
        return "Minum Es"
    } else {
        return "Main Game"
    }
}*/

//lebih dari 2 atau bisa juga pakai if semuaa
/*function ngajarKahV2(){
switch (hariIni) {
    case "hujan":
        return "Ngajar"
        break;
    case "panas":
        return "Minum Es"
        break;
    default:
        return "Main Game"

    }
}

console.log(ngajarKahV2())*/


//LOOPING harus ada end condition

/*for (let i = 0; i < 5; i++){
    console.log(i)
}*/

//write a function to print every odd number from 0 to 100

//return itu nanti di stop kalau dah ketemu jadi cuman print 1 aja

function oddNumber() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
// oddNumber()

//kelipatan 3 = Fizz
//keliipatan 5 = Buzz
//kelipatan 3 dan 5 = FizzBuzz


function nama(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}

/*function deret(i) {
    if (i % 15 === 0) {
        return "FizzBuzz";
    } else if (i % 5 === 0) {
        return "Buzz";
    }
    else if (i % 3 === 0) {
        return "Fizz"
    }
    return (i);
}

let angka = 200
for (let i = 1; i <= angka; i++) {
    console.log(deret(i))
}*/

const DAYS = ['monday', 'tuesday', 'sunday']
const DASV2 = ['Wednesday', 3, true]

//tambahin string
DAYS.push("Wednesday")

//pop->reduce string dari belakang
//console.log(DAYS)

//loping

// for (let i=0; i<DAYS.length; i++) {
//     console.log(DAYS[i])
// }

//ganti elemen
DAYS[0]="Senin"
console.log(DAYS)

const random=[2,54,78,30,27,89,139,45,276,345]

let total = 0;
let avg = 0;
let min = random[0];
let max = random[0];

for (let i = 0; i < random.length; i++) {
    total=total+random[i];
    if (max <= random [i]) {
        max = random[i];
    }

    if (min >= random [i]) {
        min = random[i];
    }
}

avg = total/random.length;

console.log(`Total: ${total}`)
console.log(`Avg: ${avg}`)
console.log(`Min: ${min}`)
console.log(`Max: ${max}`)
