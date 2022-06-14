// class Circle {
//     constructor(){
//         this.width= 10
//         this.height= 10
//     }
// }

// const circle1 = new Circle
// const circle2 = new Circle

// console.log(circle1)
// console.log(circle2)

// //********  */

// class Animal {
//     static numberOfAnimal = 1

//     constructor(propCute, propName) {
//         this.animalCute = propCute
//         this.animalName = propName
//     }

//     isSleeping(){
//         return `ZZZzzz yes it is`
//     }

//     isEating(){
//         console.log("nom nom nom")
//     }
// }

// class Fish extends Animal{
//     constructor(animalCute, animalName, propSkinType ){
//         super(animalCute, animalName)

//         this.skinType = propSkinType

//     }

//     isSwimming()
//     return 'swim sime in the ocean'
// }

// const cat = new Animal("Yes", "Coco the Cat")

// const fish = new Fish("Yes", "Wanda", "Scales")

// console.log(cat)
// console.log(cat.isSleeping())
// console.log(fish.isEating())



class School {
    constructor(privateSchool, publicSchool){
        this.SchoolIsExpensive = privateSchool
        this.SchoolIsFree = publicSchool

}
}
const elementary = new School ("No", "Yes")
const middle = new School ("Yes", "No")

console.log(elementary)
console.log(middle)

class Car {
    constructor(Name, Color, Year, Type){
        this.CarName = Name
        this.CarColor = Color
        this.CarYear = Year
        this.CarType = Type
    }
}

const Toyota = new Car ('Carola', 'Black', '2021', 'Sedan')
const Ford = new Car ('Explorer', 'White', '1999', 'SUV')
console.log(Toyota)
console.log(Ford)