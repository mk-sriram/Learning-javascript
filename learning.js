//dot notation and braket notation 
// use dot notation whby default, and use braket notation when dot notation doesnt work 


var firstObj = {
    //nested fuctions : METHODS 
    fun: function function1(){
        console.log('function insder object')
    }



};
JSON.stringify(firstObj0) // javascript to JSON ( JSON cannot have functions inside)
JSON.parse(JSON.stringify(firstObj)) // converting back to javascript from json
console.long(JSON.stringify(firstObj))

//LOCAL STORAGE ( only accepts strings)
localStorage.setItem('message', 'hello') // saving to local storage 

const message = localStorage.getItem('message') // getting value back from lcoal storage 


//DOM model 
document.body.getElementsByClassName( 'body')

document.querySelector('button') //first button from the page ( 'button' -> tells which element to get)

//query selector only get the first element tht has been told , to get, to get thes econd elent you need to make sure the class attribute is selected 

//just use a class selector instead of a element name 
