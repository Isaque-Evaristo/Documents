function media(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var resultado=parseInt(num1)+parseInt(num2)+parseInt(num3) 
    var result= resultado/3
    document.getElementById("result").innerHTML=result
    
}
