/*Functions are first class citizens in JS which means
* functions behave like normal datatypes
* functions can be passed as an argument
* functions can be returned from another function
* functions can be stored in a data structure
*/



//EXAMPLE 1
function add(a,b){
    return a+b;
}

//assign function to a variable
const myFunc=add;


//function takes func as an argument and returns function
function crazy(func, a, b){
    return func(a,b)
}

const value=crazy(myFunc, 3, 5);
console.log(value);




//EXAMPLE 2