let chislo = document.getElementById("chislo")
let firstNumber = 0
let operation = ""
let isOperation = false


// let button = document.getElementById("button")
// console.dir(button)



// // button.addEventListener("click", addOne)
// // function addOne() {
// //     let oldNumber = screen.innerHTML
// //     screen.innerHTML = Number(oldNumber) + 1;
// // }
// let button2 = document.getElementById("button2")

// button2.addEventListener("click", addTwo)
// function addTwo() {
//     if (screen.innerHTML == 0) {
//         screen.innerHTML = 2
//     } else {
//         let oldNumber = screen.innerHTML
//         screen.innerHTML = (oldNumber) + 2;
//     }

// }
// button.addEventListener("click", addOne)
// function addOne() {
//     if (screen.innerHTML == 0) {
//         screen.innerHTML = 1
//     } else {
//         let oldNumber = screen.innerHTML
//         screen.innerHTML = oldNumber + 1;
//     }

// }
// let button3 = document.getElementById("button3")

// button3.addEventListener("click", addThree)
// function addThree() {
//     if (screen.innerHTML == 0) {
//         screen.innerHTML = 3
//     }
//     let oldNumber = screen.innerHTML
//     screen.innerHTML = (oldNumber) + 3;
// }

// let button4 = document.getElementById("button4")

// button4.addEventListener("click", addFour)
// function addFour() {
//     if (screen.innerHTML == 0) {
//         screen.innerHTML = 4
//     }
//     let oldNumber = screen.innerHTML
//     screen.innerHTML = (oldNumber) + 4;
// }


// let buttonC = document.getElementById("buttonC")

// buttonC.addEventListener("click", addDelete)
// function addDelete() {
//     let oldNumber = screen.innerHTML
//     screen.innerHTML = 0
// }
// let num1 = document.getElementById("chislo")
// let num2 = document.getElementById("chislo2")
// let result = document.getElementById("result")
//  let button11 = document.getElementById("button11")
// button11.addEventListener("click", count)
//     function count(chislo1, chislo2, result) {
//         switch (result) {
//             case "+":
//                 return chislo1 + chislo2;
//         }
//     }
let buttons_field = document.getElementById("buttons_field")

let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "mc", "m+", "m-", "mr", "+", "-", "*", "/", "C", ",", "="]
let buttonsObj = [
    {
        text: "0",
        background: "white",
        action: number

    },
    {
        text: "1",
        background: "white",
        action: number


    },
    {
        text: "2",
        background: "white",
        action: number

    },
    {
        text: "3",
        background: "white",
        action: number

    },
    {
        text: "4",
        background: "white",
        action: number

    },
    {
        text: "5",
        background: "white",
        action: number

    },
    {
        text: "6",
        background: "white",
        action: number

    },
    {
        text: "7",
        background: "white",
        action: number

    },
    {
        text: "8",
        background: "white",
        action: number

    },
    {
        text: "9",
        background: "white",
        action: number

    },
    {
        text: "m",
        background: "grey",

    },
    {
        text: "mc",
        background: "grey"

    },
    {
        text: "mc",
        background: "grey"

    },
    {
        text: "mc",
        background: "grey"

    },
    {
        text: "+",
        background: "grey",
        action: arithmeticOperation

    },
    {
        text: "-",
        background: "grey"

    },
    {
        text: "*",
        background: "grey"

    },
    {
        text: "/",
        background: "grey"

    },
    {
        text: "C",
        background: "grey",
        action: clear
    },
    {
        text: ".",
        background: "white",
        action: point
    },
    {
        text: "=",
        background: "white",
        action: total
    },




]
buttonsObj.forEach(function (element) {
    let button = document.createElement("div")
    button.className = "knopki"
    button.innerHTML = element.text
    button.style.backgroundColor = element.background
    buttons_field.appendChild(button)
    button.addEventListener("click", element.action)
    buttons_field.appendChild(button)
}
)
function number(event) {
    if (isOperation){
        chislo.innerHTML = 0
    }
    if (chislo.innerHTML === "0") {
        chislo.innerHTML = event.target.innerHTML
    } else {
        chislo.innerHTML = chislo.innerHTML + event.target.innerHTML
    }
    isOperation = false
}



function clear() {
    chislo.innerHTML = 0
}


function point(event) {
    if (chislo.innerHTML.includes(".")) {
        return
    }
    chislo.innerHTML = chislo.innerHTML + "."
}


function arithmeticOperation(event) {
    if (operation == "") {
        firstNumber = chislo.innerHTML
        operation = event.target.innerHTML
        console.log(firstNumber)
        console.log(operation)
        isOperation = true
    }
}




function total() {
    if (operation == "") {
        return
    }
    if (operation == "+") {
        chislo.innerHTML = Number(firstNumber) + Number(chislo.innerHTML)
        operation = ""
        firstNumber = ""
    }
    // isOperation = true
    // if (operation == "-") {
    //     chislo.innerHTML = Number(firstNumber) - Number(chislo.innerHTML)
    //     operation = ""
    //     firstNumber = ""
    // }
    // isOperation = true
    
}