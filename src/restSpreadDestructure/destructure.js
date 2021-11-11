

//destructure
//elimizdeki arrayin degerlererini degiskenlere atamak

let populations = [10000, 20000, 30000,[40000,50000]]
let [small, medium, high, [veryHigh, max]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(max)

function someFunction([a],number) {
    console.log(a)
}
someFunction(populations)


//object de destructure

let category = {id:1, name:"icecek"}
console.log(category.id)
console.log(category.name)

let {id,name} = category
console.log(id)
console.log(name)



