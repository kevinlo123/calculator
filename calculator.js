/*jquery*/


$(document).ready(function(){});


var total = 0;


$("#add").on("click", function(){
    var a = $("#left").val();
    a=parseFloat(a);
    var b = $("#right").val();
    b = parseFloat(b);
    total = a + b;
     $("#result").html(total);
     $("#left").val("");
     $("#right").val("");
});


var total = 0;


$("#subtract").on("click", function(){
    var a = $("#left").val();
    a=parseFloat(a);
    var b = $("#right").val();
    b = parseFloat(b);
    total = a - b;
     $("#result").html(total);
     $("#left").val("");
     $("#right").val("");
});

var total = 0;


$("#divide").on("click", function(){
    var a = $("#left").val();
    a=parseFloat(a);
    var b = $("#right").val();
    b = parseFloat(b);
    total = a / b;
     $("#result").html(total);
     $("#left").val("");
     $("#right").val("");
});

var total = 0;


$("#multiply").on("click", function(){
    var a = $("#left").val();
    a=parseFloat(a);
    var b = $("#right").val();
    b = parseFloat(b);
    total = a * b;
     $("#result").html(total);
     $("#left").val("");
     $("#right").val("");
});



/****vanilla javascript*/

/*var total = 0;

document.getElementById('add').onclick = addition;
document.getElementById('subtract').onclick = subtract;
document.getElementById('divide').onclick = divide;
document.getElementById('multiply').onclick = multiply;

document.getElementById('result').innerHTML = total;

  function addition(){
    var a=document.getElementById('left').value;
    a = parseFloat(a);
    var b=document.getElementById('right').value;
    b = parseFloat(b);
    total = a + b;
    document.getElementById('result').innerHTML = total;
    document.getElementById('left').value = "";
    document.getElementById('right').value = "";
  }

  function subtract(){
    var a=document.getElementById('left').value;
    a = parseFloat(a);
    var b=document.getElementById('right').value;
    b = parseFloat(b);
    total = a - b;
    document.getElementById('result').innerHTML = total;
    document.getElementById('left').value = "";
    document.getElementById('right').value = "";
  }

  function divide(){
    var a=document.getElementById('left').value;
    a = parseFloat(a);
    var b=document.getElementById('right').value;
    b = parseFloat(b);
    total = a / b;
    document.getElementById('result').innerHTML = total;
    document.getElementById('left').value = "";
    document.getElementById('right').value = "";
  }

  function multiply(){
    var a=document.getElementById('left').value;
    a = parseFloat(a);
    var b=document.getElementById('right').value;
    b = parseFloat(b);
    total = a * b;
    document.getElementById('result').innerHTML = total;
    document.getElementById('left').value = "";
    document.getElementById('right').value = "";
  }*/
