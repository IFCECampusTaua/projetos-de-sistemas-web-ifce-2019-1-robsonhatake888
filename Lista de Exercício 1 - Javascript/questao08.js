botao.addEventListener('click', function(){
    var num1 = document.getElementById('texto1').value;
    var na = parseInt(num1);
    
    var i;
    for(i = 1; i <= na; i++){
    	alert("IFCE "+i);
    }
});