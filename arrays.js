// let food="eating"
// let str=food.reverse()
// console.log(str)




// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num=[2,8,0,23,5,45,76]

function search(num){
        if(num.length<=1){
            return num
        }
        let middle=Math.floor((num.length)/2)
        let left=num.slice(0,middle)
        let right=num.slice(middle)
        return sorted(search(left),search(right))
    }
    function sorted(left,right){
        let newArray=[]
        while(left.length&&right.length){
            if(left[0]<right[0]){
                newArray.push(left.shift())
    
            }
            else{
                newArray.push(right.shift())
            }
        }
        return[...newArray,...left,...right]
    }
   
    let num=[2,8,0,23,5,45,76]
    console.log(search(num))
    
    // Given years between 2000 and 2023, console all the leap years in the following
    // sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

let num1=[1,2,3,4,5,6,7,8,9]
let a="fizz"
if(a=="fizz"){
    console.log(a)
}
else{
    console.log()

}


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]

for(let i=0; numArray<=4;i++){
    numArray(i)*=4
    i++
}
console.log(numArray)

// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
let names=["James","Jacob","Ann","Mumo"]
for(let a=0;a<names.length;a++){
    console.log(a)
}


































