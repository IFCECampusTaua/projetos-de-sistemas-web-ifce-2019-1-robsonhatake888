botao.addEventListener('click', function(){
var num1 = document.getElementById('texto1').value;
var n1 = parseInt(num1);

	if(n1>0 && n1<=10){
		alert("Insuficiente");
	}else{
		if (n1>10 && n1<=14) {
			alert("Bom");
		}else{
			if (n1>14) {
				alert("Muito bom");
			}
		}
	}




});
