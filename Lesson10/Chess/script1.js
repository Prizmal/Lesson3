// const container = document.getElementById("container")
// document.createElement("div")
// for (let i = 0; i < 65; i++) {
//     document.createElement("div")
//     container.appendChild(element)

// }
const container = document.getElementById("container")

document.createElement("div")

for (let i = 1; i < 65; i++) {

    let element = document.createElement("div")
    
    element.innerHTML = i
    if(i%2){
         element.style.backgroundColor = "blue"
    }
    container.appendChild(element)
 
    
   
}