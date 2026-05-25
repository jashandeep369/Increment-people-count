mypoint = 3
function add() {
    mypoint += 1
}

function minus() {
    mypoint -= 1
}
add()
console.log(mypoint)


//let saveEl =   document.getElementById("save-el")


let count = 0

function increment() {
    count += 1
    document.getElementById("count").innerText = count
    
}



function save() { 
    countStr = count + " - "
    saveEl.textContent += countStr
    count=0
    document.getElementById("count").innerText = 0
}





//let firstName = "Jashandeep"

//let lastName = "singh"

//let fullName = firstName +" "+lastName

//console.log(fullName)

//let name = "Linda"
//let greeting = "Hi there"

//function Lindagreeting() {
//    console.log(greeting+", "+name+"!")
//}

//Lindagreeting()
// document.getElementById("count").innerText = 5

// let my_age = 17

// let humanDogRatio = 7

// let myDogAge = my_age + humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50

// bonusPoints = bonusPoints - 75

// console.log(bonusPoints)


  

    




//let name = "Jashan"
// let greeting = "Hi my name is"

// let mygreeting = greeting+" "+name

// console.log(mygreeting)