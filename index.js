
// getting the full url
let getUrl = () => {
  document.getElementById('fullurl').innerHTML =
    "The URL of this page is: " + window.location.href;
}

// splicing

var a = [1, 2, 3, 4, 5, 6];
document.getElementById('spliceMe').innerHTML = a;

let spliceIt = () => {
  a.splice(2, 1, 7, 8, 9);
  document.getElementById('spliceMe').innerHTML = a;
}


var x = ['A', 'B', 'C', 'D'];
document.getElementById('spliceMe2').innerHTML = x;

let spliceIt2 = () => {
  x.reverse().splice(0, 3, 'X', 'Y', 'Z');
  document.getElementById("spliceMe2").innerHTML = x;
}

var array = [20, 35, 3, 6, 8, 13, 0, 10, 21, 9];
document.getElementById('oddNum').innerHTML = array;

let getOddNum = () =>{
  let odds = array.filter(number => number % 2 === 1);
  document.getElementById('oddNum2').innerHTML = 'Odd Numbers are' + ' :- ' + odds;
}
array.forEach(getOddNum);



 // using Setter 
var arithmeticOperation = {
   a: 0,
   b: 0,
    set operation(value) {
    this.a = value;
    this.b = value;
   },
 
    
  
}
// this is for addition
arithmeticOperation.operation = 2 + 5;
document.getElementById('arithmeticOpp').innerHTML = arithmeticOperation.a && arithmeticOperation.b


// this is for subraction
arithmeticOperation.operation = 2 - 5;
document.getElementById('arithmeticOpp1').innerHTML = arithmeticOperation.a && arithmeticOperation.b;

// this is for multiplication
arithmeticOperation.operation = 2 * 5;
document.getElementById('arithmeticOpp2').innerHTML = arithmeticOperation.a && arithmeticOperation.b;



// Using Getter 
var arithmeticOperation = {
   a:2,
   b:5,
   get operation() {
    return this.a + this.b; 
           
    
   },
   
   get operation1() {
   return this.a - this.b; 
          
   
  },
   get operation2() {
   return this.a * this.b; 
          
   
  },
}  


document.getElementById('arithmeticOpp3').innerHTML = arithmeticOperation.operation && arithmeticOperation.operation;
document.getElementById('arithmeticOpp4').innerHTML = arithmeticOperation.operation1 && arithmeticOperation.operation1;
document.getElementById('arithmeticOpp5').innerHTML = arithmeticOperation.operation2 && arithmeticOperation.operation2;

