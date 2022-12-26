let chislo = document.getElementById("chislo")
let firstNumber = 0
let operation = ""
let isOperation = false


let buttons_field = document.getElementById("buttons_field")

let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "mc", "m+", "m-", "mr", "+", "-", "*", "/", "C", ",", "=", "%", "√"]
let buttonsObj = [
    {
        text: "mc",
        background: "#c8c8c8"

    },
    {
        text: "m+",
        background: "#c8c8c8"
    },
    {
        text: "m-",
        background: "#c8c8c8"
    },

    {
        text: "mr",
        background: "#c8c8c8"

    },
    {
        text: "C",
        background: "#c8c8c8",
        action: clear
    },
    {
        text: "/",
        background: "#c8c8c8",
        action: arithmeticOperation

    },
    {
        text: "*",
        background: "#c8c8c8",
        action: arithmeticOperation

    },
    {
        text: "AC",
        background: "#c8c8c8",
        action: clear
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
        text: "-",
        background: "#c8c8c8",
        action: arithmeticOperation,


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
        text: "+",
        background: "#c8c8c8",
        action: arithmeticOperation

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
        text: "=",
        background: "#19b2e6",
        action: total
    },

    {
        text: "%",
        background: "white",
        action: percent
    },
    {
        text: "0",
        background: "white",
        action: number

    },
    {
        text: ".",
        background: "white",
        action: point
    },
    {
        text: "+/-",
        action: toggleSign

    },
    {
        text: "√",
        background: "white",
        action: arithmeticOperation,
        width:"25%"
        
    },

]
buttonsObj.forEach(function (element) {
    let button = document.createElement("div")
    
    button.className = "knopki"
    button.innerHTML = element.text
    button.style.backgroundColor = element.background
    if (element.text == "√") {
        button.style.backgroundColor = "#6495ED"
        button.style.width = "100%"
        
        
    }
    buttons_field.appendChild(button)
    button.addEventListener("click", element.action)
    buttons_field.appendChild(button)
    
}
)
function number(event) {
    if (isOperation) {
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

    if (operation == "-") {
        chislo.innerHTML = Number(firstNumber) - Number(chislo.innerHTML)
        operation = ""
        firstNumber = ""

    }
    if (operation == "*") {
        chislo.innerHTML = Number(firstNumber) * Number(chislo.innerHTML)
        operation = ""
        firstNumber = ""
    }
    if (operation == "/") {
        chislo.innerHTML = Number(firstNumber) / Number(chislo.innerHTML)
        operation = ""
        firstNumber = ""
    }
    if (operation == "√") {
        chislo.innerHTML = Math.sqrt(firstNumber)
        operation = ""
        firstNumber = ""
    }


}
function percent(event) {
    if (chislo.innerHTML != 0) {
        chislo.innerHTML = chislo.innerHTML / 100
    }
}
function toggleSign() {
    chislo.innerHTML = -chislo.innerHTML
}