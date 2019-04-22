
botao.addEventListener('click', function(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var na = parseInt(num1);
    var nb = parseInt(num2);
    
    var resto = na % nb;
    alert(resto);
});