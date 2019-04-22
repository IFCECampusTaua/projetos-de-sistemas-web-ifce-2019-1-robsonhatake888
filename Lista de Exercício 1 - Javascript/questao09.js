botao.addEventListener('click', function(){
    var num1 = parseInt(document.getElementById('texto1').value);
    
    document.getElementById("salario").innerHTML=  num1;
    if(num1>0 && num1<=280){
    	document.getElementById("percentual").innerHTML=  20;
    	var aumento = num1*0.2;
    	var newsalario = aumento+num1;
    	document.getElementById("aumento").innerHTML=  aumento;
    	document.getElementById("newsalario").innerHTML=  newsalario;
    }
        if(num1>280 && num1<=700){
    	document.getElementById("percentual").innerHTML=  15;
    	var aumento = num1*0.15;
    	var newsalario = aumento+num1;
    	document.getElementById("aumento").innerHTML=  aumento;
    	document.getElementById("newsalario").innerHTML=  newsalario;
    }
        if(num1>700 && num1<=1500){
    	document.getElementById("percentual").innerHTML=  10;
    	var aumento = num1*0.1;
    	var newsalario = aumento+num1;
    	document.getElementById("aumento").innerHTML=  aumento;
    	document.getElementById("newsalario").innerHTML=  newsalario;
    }
        if(num1>1500){
    	document.getElementById("percentual").innerHTML=  5;
    	var aumento = num1*0.05;
    	var newsalario = aumento+num1;
    	document.getElementById("aumento").innerHTML=  aumento;
    	document.getElementById("newsalario").innerHTML=  newsalario;
    }


});