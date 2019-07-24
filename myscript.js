// this for the arithmetic functions

function add() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = Number(a) + Number(b);
    
    // var a = 10;
    // var b = 34;
    // var c = 0;
    // var c = a + b;
    document.getElementById("sum").value = c;
    }