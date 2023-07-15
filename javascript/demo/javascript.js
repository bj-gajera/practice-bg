function hello(){
    // document.getElementById('java').style.color = "red"
    // document.getElementById('java').style.fontSize = "45px"
    // document.getElementById('java').innerHTML = "Bad morning"
    // document.getElementById('luck').innerHTML = "Good morning"
    // document.write('Java Script')
    // window.alert('Good morning')
    //  console.log("javaScript")
}

// varibale 3
 

// var
// let
// const


// var x = ["xyz",50]
// console.log(x)

// {
//     var x = 100
//     console.log(x)
// }
// var y
// y = 1000
// console.log(y)
// var y = 10;
// console.log(y)
// {
//     var x = 100
//     console.log(x)
// }
// console.log(x)


// block scope 
// let str
// str = 50

// console.log(str)
// // let str = 10;


// {
//     let str= 15
//     console.log(str)
// }
// console.log(str)


// const str
// str = 10
// console.log(str)
// // const str = 10

// {
//     const str= 15
//     console.log(str)
// }
// console.log(str)


// let x = 10
// console.log(x)

// var x = 5;
// x =10 
// console.log(x)


// let x = 10;
// console.log(x)

// {
//     let x =15;
//     console.log(x)

// }

// console.log(x)


// let x =10
// let x
// x =15;


// const a = 10

// const arr = ["red","black",15]

// console.log(arr)


// let x =2
// let y =3
// let z = x ** y
// console.log(z)

// let x = 15
// x += 10
// x += 15
// console.log(x)


// let x = 10
// let y = 10
// let z = 10
// console.log(x==y && x==z)
// console.log(x==y || x==z)
// console.log(!(x==y))


// ------------data type--------

// let str = "good morning"
// console.log(typeof str);

// let number = 15
// console.log(typeof number)

// let number = 61989819898989815551
// let bigint = BigInt(61989819898989815551)

// console.log(bigint)
// console.log(number)

// let boolean = false
// console.log(typeof boolean)

// let arr = ["red","green",15]
// console.log( arr[0])

// let obj = {firstname:"joshi",lastname: "harsh", age: 10}
// console.log(obj.age)

// let obj = new String("56")
// console.log(obj)


// let number  = null
// console.log(typeof number)

// const var1 = "null";
//     if (var1) {
//         console.log('var1 is not null');
//     } else {
//         console.log('var1 is null');
//     }


// let str = "2"
// console.log( str)

// let date  = new Date()
// console.log( date)



//--------15-3-23-------string mathod------//

// const str = "good morning good"


// const sol = str.slice(1,5)
// const sol = str.slice(-5)
// const sol = str.substr(1,7)
// const sol = str.substr(-5/)

// const sol = str.replace("good","bad")
// console.log(sol)
// const sol = str.replace(/good/gi,"bad")
// const sol = str.replaceAll("good","bad")
// console.log(sol)

// const sol = str.toUpperCase()
// console.log(sol)

// const sol = str.toLowerCase()
// console.log(sol)


// const str = "hello"
// const str1 = "world"
// const str2 = "morning"

// const sol = str.concat(" ",str1," ",str2)
// console.log(sol)

// const str = "     hello world       "


// const sol1 = str.trim()
// console.log(sol1.length)

// const sol1 = str.trimStart()
// console.log(sol1.length)

// const sol1 = str.trimEnd()
// console.log(sol1.length)

// const str = "Har,sh j|os,hi"

// const sol = str.padStart(15,"*")
// console.log(sol)
// const sol = str.padEnd(14,"x")
// console.log(sol)

// const sol = str.charAt(1)
// console.log(sol)

// const sol = str.charCodeAt(5)
//  console.log(sol)

// const sol = str.split(",")
// console.log(sol)


// const str = "Good morning good"

// const sol = str.includes("mor")
// console.log(sol)
// const sol = str.startsWith("Good")
// console.log(sol)

// const sol = str.endsWith("morning")
// console.log(sol)

// const sol = str.indexOf("morning")
// console.log(sol)

// const sol =str.lastIndexOf("morning")
// console.log(sol)

// const sol = str.indexOf("good")
// console.log(sol)

// const sol = str.search(/good/)
// console.log(sol)

// let str = "The rain in SPAIN stays mainly in the plain";

// const sol = str.match(/ain/ig)
// console.log(sol)

// const sol = str.matchAll("ain")


// const sol1 = Array.from(sol)

// console.log(sol1)

// const d = new Date();
// console.log(d)


const reandom = Math.random()

console.log(reandom)

const random = Math.floor(Math.random() * 100000) + 100000

console.log(random)

let x = 15
let z = 10
let y = x == 15 || z ==9 ? "<h1>hello java</h1>" : "<h6>Good morning</h6>"

document.getElementById('java').innerHTML = y

function myFunction() {
    let val;
  let age = Number(document.getElementById("inp").value);
  if(isNaN(age)){
    alert("is nan")
  }else{
    val = age < 18 ? "child" : "young"
}
document.getElementById('good').innerHTML  =val
}

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = age < 18 ? "Too young" : "Old enough";
}

let x = 15

if(x < 16){
    document.getElementById('java').innerHTML = "true value"
}else{
    document.getElementById('java').innerHTML = "false value"
}

let date = new Date().getFullYear()

if(date < 2000){
    document.getElementById('java').innerHTML = "smaller"
}else if(date < 2022){
    document.getElementById('java').innerHTML = "harsh"
}else{
    document.getElementById('java').innerHTML = "jc"
}

let x = new Date().getDay();

let x = 2

let day = "";
switch (x) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thrusday";
    break;
  default:
    day = "default";
}

console.log(day);

const arr = [15, 25, 10, 20, 5];
let val = "";
for (let i = 0; arr.length > i; i++) {
  if (i == 3) {
    break;
  }
  val += arr[i] + " ";
}
document.getElementById("java").innerHTML = val;