// // ESERCIZIO 1

function control50(n1,n2) {
    return n1 === 50 || n2 === 50 || n1+n2 === 50
    }

    let result1 
    result1 = control50(50,25)
    console.log("Esercizio 1 = "+ result1)


// // ESERCIZIO 2

function substract(string, position) {
    if ( position <= 0 || position > string.length) {
        console.error("Position not valid")
        return string
    }
    position -=1
    let newstring = string.slice(0, position) + string.slice(position +1)
    return newstring
}

    let result2 
    result2 = substract("domenico", 7)
    console.log("Esercizio 2 = " + result2)


// ESERCIZIO 3

function rangeCheck(x,y) {    
    return (x >= 40 && x <= 60 || x >= 70 && x <= 100) && ( y >= 40 && y <= 60 || y >= 70 && y <= 100 )
}

    let result3 = rangeCheck(10000,55)

    console.log("Esercizio 3 = "+ result3)

// ESERCIZIO 4

function cityCheck(city){
    let lcity = city.toLocaleLowerCase()
    if (lcity.slice(0,3).includes("new") || lcity.slice(0,3).includes("las")) {
        return city }

    else { return false}
}
let result4a = cityCheck("new york")
console.log("Esercizio 4 = "+ result4a)

let result4b = cityCheck("las vegas")
console.log("Esercizio 4 = "+ result4b)

let result4c = cityCheck("bologna")
console.log("Esercizio 4 = "+ result4c)

// ESERCIZIO 5

let arrayN = [1,2,3,40,5]

// function arraySum (array) 

const somma = (array) =>  {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
            }
        return sum;}    

// let result5 = arraySum(arrayN)
console.log("Esercizio 5 = "+ (somma(arrayN)));

// ESERCIZIO 6

let array6 = [2,2,4,5]
function check13(value) {
    let step1 = array6.includes(1)
    let step2 = array6.includes(3)
    if (step1 || step2 === true) {
        return false
    } else {
        return true
    }
}
let result6 = check13(array6)
console.log("Esercizio 6 = "+ result6)


// ESERCZIO 7

function angleCheck(value) {
    switch (true) {
        case value < 0 || value > 360: return "Angolo non valido"; break;
        case value < 90: return "Acuto";
        case value > 90 && value < 180: return "Ottuso";
        case value === 90: return "Retto";
        case value === 180: return "Piatto";
    }
}
let result7 = angleCheck(18000000)
console.log("Esercizio 7 = " + result7)

// ESERCZIO 8

function acronym (fullname) {
    
}