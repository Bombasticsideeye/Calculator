function add() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = x+y;
    var b = "The sum of " + x + " and " + y + " is ";
    document.getElementById("result").innerHTML = b+z;
}
  
function sub() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = x-y;
    var b = "The difference of " + x + " and " + y + " is ";
    document.getElementById("result").innerHTML = b+z;
}

function mult() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = x*y;
    var b = "The product of " + x + " and " + y + " is ";
    document.getElementById("result").innerHTML = b+z;
}

function divi() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = x/y;
    var b = "The quotient of " + x + " and " + y + " is ";
    document.getElementById("result").innerHTML = b+z;
}

function perc() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var z = (x/y)*100;
    var b = "The percent of " + x + " to " + y + " is ";
    var a = String("%");
    document.getElementById("result").innerHTML = b+z+a;
}