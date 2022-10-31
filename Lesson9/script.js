// if else
// логическое и &&
//логическое или ||
//логическое не
// if (!true) {
//     console.log("выполнено")
// }
// else {
//     console.log("не выполнено")
// }
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')


let lastEdgeColor = ""
let currentColor = "red"

function toggle() {
    if (currentColor == "red") {
        red.style.backgroundColor = "rgba(255,0,0,0)"
        yellow.style.backgroundColor = "rgba(255,255,0,1)"
        currentColor = "yellow"
        lastEdgeColor = "red"
        return
    }
    if (currentColor == "yellow" && lastEdgeColor =="red" ) {
        yellow.style.backgroundColor = "rgba(255,255,0,0)"
        green.style.backgroundColor = "rgba(0,255,0,1)"
        currentColor = "green"
        return
}
if (currentColor == "green"){
    green.style.backgroundColor = "rgba(0,255,0,0)"
    yellow.style.backgroundColor = "rgba(255,255,0,1)"
    currentColor = "yellow"
    lastEdgeColor = "green"
    return
}
if (currentColor == "yellow" && lastEdgeColor =="green" ) {
    yellow.style.backgroundColor = "rgba(255,255,0,0)"
    red.style.backgroundColor = "rgba(255,0,0,1)"
    currentColor = "red"
    return
}
}

setInterval(toggle,0.01)