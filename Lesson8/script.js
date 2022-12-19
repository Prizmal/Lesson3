// let cars = ['saab', 'volvo', 'bmw', 'tesla']

//remove last element
// cars.pop()
//add element to end
// cars.push('tesla')

// cars.shift()

let car = {
    type: 'fiat',
    model: '500',
    color: 'white',
    sound: function(text){
        return text
    }
}


let demo = document.getElementById('demo')

demo.innerHTML = car.sound('строка')



// console.dir(demo)
