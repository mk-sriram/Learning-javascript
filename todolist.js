function todolistadd(){

const inputVar = document.querySelector('.name-input'); 

}
//

settimeout(function (){
    console.log('timeout'); //inside is sync 
    console.log('timeout2')
}) //this block of code is is async 

setInterval(function(){
    console.log('interval');
    
}, 3000); 

//async code -> computer won't wait for the line to finish before going to the next line
//sync code -> computer waits for the line to finish before going to the next line 


const arrowFunction = (param1, param2) => {
    console.log('arrowFunction'); 
};
arrowFunction(); 

//differences 

const oneparam = param => { 
    console.log(param +1 ); 

};

oneparam(2);