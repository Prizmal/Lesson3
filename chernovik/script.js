let body = document.getElementById("body")
let buttons = [1,2,3,4,5, "+", "-"]
let buttonsObj = [
{
    text:"AC",
    background: "grey"
},
{
    text:"1",
    background: "red",

},
{
    text:"2",
    background: "green",
},
]



buttonsObj.forEach(function(element){
let button = document.createElement("div")
button.innerHTML = element.text
button.style.backgroundColor = element.background
body.appendChild(button)
}
)