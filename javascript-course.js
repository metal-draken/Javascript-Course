/*
var variable = "text";
console.log (variable)

var var2 = [1,2,3];
console.log (var2)

var var3 = [1,2,3,"4"];
console.log (var3)

var var4 = [1,2,3,"4"];
console.log (var4 [1])

var var4 = [1,2,3,"4"];
console.log (var4 [5])

var var4 = [1,2,3,"4"];
console.log (typeof var4 [5])

var var5 = null;
console.log (var5)

var var5 = null;
console.log (typeof var5)

var var6 = NaN;
console.log (var6)

var varX = {
  name: "Marco"
 };
console.log (varX)

var var1 = 5;
console.log (var1);

var var1 = 5;
var Var1 = 10;
var vAr1 = 15;
var vaR1 = 20;
console.log (var1);
console.log (Var1);
console.log (vAr1);
console.log (vaR1);
*/



/*
function calc() {
  console.log ("Inside function");
}

calc(5);
*/


/*  
function calc() {
  console.log ("Inside function");
}

var anotherFn = calc;
anotherFn();



function calc2() {
  console.log ("Inside function2");
}

var anotherFn2 = calc2();
console.log(anotherFn2)
*/



/*
function calc2() {
  return "Inside function3";
}

var anotherFn2 = calc2();
console.log(anotherFn2)


function calc3() {
  var stringVar = "Inside function 4"
  return stringVar;
}

var anotherFn3 = calc3();
console.log(anotherFn3)
*/


/*
function suma(n1,n2) {
  return n1 + n2;
};

var prueba = suma(1,2);
console.log(prueba);
*/


/*
function suma(n1,n2) {
  return n1 + n2;
};

console.log (suma(1,2))
*/


/*
var condition = false;

if (condition) {
  console.log("Executed");
} else {
  console.log("Not executed")
}
*/


/*
var condition1 = false;
var condition2 = true;

if (condition1) {
  console.log("Executed1");
} else if (condition2) {
  console.log("Executed2");
} else {
  console.log("Nos executed")  
} 
*/



/*
var luckyNumber =8;

switch (luckyNumber) {
  case 1:
    console.log ("Is 1");
    break;
  case 8:
    console.log ("Is 8");
    break;
  default:
    console.log ("Default");
    break;
}
*/


/*
for (var i = 0; i < 5; i++) {
  console.log(i);
}
*/


/*
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
  console.log(i*j);}
}
*/


/*
for (var i=0; i<5; i++) {
  if (i == 1) {
    break;
  }
  console.log(i);
}

for (var i=0; i<5; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}
*/



for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 2; j++) {
        if (i == 1) {
            break;
        }
        console.log("inside inner loop, j = " + j);
    }
    console.log(i);
}









