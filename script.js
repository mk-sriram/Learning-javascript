// var testing = "Hello world! "

// function a (){ 
//     console.log( "function A ")

// }
// if ( x == undefined){

//     console.log("x is undefined")
    
// }

// // type cohersion -> x = "4" , y = 4; gets converted to num to be compared 
// // to enforce equality , use === 
// a(); 

// /* what is true in javascript 

// */ 
// function orderChickenWith(sideDish){
//     sideDish = sideDish || "whatever!"; 
//     console.log("chicken with " + sideDish)
// }

// orderChickenWith();/

// OBJECTS 


// var company = new Object(); 
// company.name = "fackbook";
// company.ceo = new Object(); 
// company.ceo.firstName = "Sri" ;
// company.ceo.secondName = "Ram" ; 
// company["stock of company"] = 100;  //spaces: need the brackets 
// console.log(company);


//BETTER WAY
// var facebook = {
//     name: "facebook", 
//     ceo: {
//         firstname: "sri", 
//         secondmae: "ram"
//     },  
// };


// // FUNCTIONS : functions are just objects 
// function multiply(x,y){
//     return x*y
// }


// //function factorty 
// function makeMultiplier(multiply){

// }

// function Circle (radius){
//     this.radius = radius; 
//     this.getArea = 
//     function () { 
//         return Math.PI * Math.pow(this.radius,2); // no readson to do this every single timei 
//     };
// }

// function Circle (radius){
//     this.radius = radius; 

// }

// Circle.prototype.getArea =

//ARRAYS 
// var array = new Array(); 

// array[0]

// //CLOSURES 
// function makeMultiplier(multiplier){
// return (
//     function (x){
//         return multiplier * x; 
//     }
// ); 
// }

// var doubleALL = makeMultiplier(2);
// console.long(doubleALL(10)) // here the first return statement , returns the 
// //entire function to varaible double ALL, so basically , doubleALL becomes its own function 
// //but the value of multiplier  remains within the function and then when the second DoubleALL function looks for it , it searches within the main function to find it 





// const myArray = ["eat","sleep","code"]

// const myObject = { 
//     name: "Dave", 
//     hobbies: ["eat","sleep","code"],
//     logName: function() { 
//         console.log(this.name); 
//     }


// }; 
// localStorage.setItem("myLocal", JSON.stringify(myArray)); 
// const key = localStorage.getItem();

// const myLocalData = JSON.parse('myLocal');
// console.log(myLocalData)
// sessionStorage.setItem("YaYeet", JSON.stringify(myObject)); 
const jokeObject = {
    id: "nrz5oWnyPuc",
    joke: "What did the doctor say to the gingerbread man who broke his leg? Try icing it.",
  }

const getDadjoke = async () => { 
    const response = await fetch("https://icanhazdadjoke.com/", {
            
        method: "GET", 
            headers: { 
                Accept: "application/json"
            }
    });
    const jsonJokeData = await response.json(); 

    console.log(jsonJokeData); 

} 

const postDadjoke = async (jokeObj) => { 

    const response = await fetch("https://httpbin.org/post", {
        method: "POST", 
        headers: { 
                "Content-type": "application/json"
            }, 
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json(); 

    console.log(jsonResponse); 

} 

getDadjoke();

postDadjoke(jokeObject)