/*
    Javascript Test
*/

/*
q1
    we have 2 variable 

    var a = 10, b = 20;

    Write some code to swap their value, so the final value would be a = 20, b = 10
*/

/*
q2. if q1 is only use a and b ( not third variable is created). 

    Enhance q1 by using only 2 variable to swap the value.
*/

/*
q3. 
    Now we have another 2 variable 

    var a = "K", b = "O"

     Write some code to swap their value, so the final value would be a = "O", b = "K".
     Without creating a new variable, object and array.
*/

////  q1 - temp var
var a = 10;
var b = 20;
let t = a;
a = b;
b = t;
console.log("Q1: a is", a, ", b is", b);

//// q2 -index swap
let x = 10,
  y = 20;
let arr = [x, y];
y = arr[0];
x = arr[1];
console.log("Q2: x is", x + ", y is", y);

//// Q2 - math
let x1 = 10,
  y1 = 20;
  function change(x, y) {
    return [x *2, y/2]
  }

  [x1, y1] = change(x1, y1);
console.log("x1=",x1, "y1=",y1);

//// q3 - destruct
function swap(x, y) {
  return [y, x];
}
var e = "K",
  r = "0";

[e, r] = swap(e, r);
console.log(e + " " + r);

//// q3 - destruct
let m = "K",
  n = "O";
[m, n] = [n, m];
console.log(m == "O" && n == "K");
