function resultado() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var num3 = document.getElementById('num3').value

    var result = parseInt(num1) + parseInt(num2) + parseInt(num3);

    var resultado = (result / 3).toFixed(1);

    if (resultado >= 7) {
        document.getElementById('resultado').innerHTML = 'Aprovado com média de:' + resultado;
    } else if (resultado >= 5) {
        document.getElementById('resultado').innerHTML = 'recuperação:' + resultado;
    }
    else {
        document.getElementById('resultado').innerHTML = 'reprovado:' + resultado;
    }


}