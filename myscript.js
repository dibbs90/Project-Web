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

    function mltadd() {
        var a= document.getElementById("nms").value;
        var arr = a.split(",");
        var s=0;
        for (let i = 0; i < arr.length; i++) {
            var s=s+Number(arr[i]);      
        }
         
        document.getElementById("tot1").value=s;
    }