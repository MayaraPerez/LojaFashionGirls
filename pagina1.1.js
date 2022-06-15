function funcaoAlerta() {
    alert("Formulario Preenchido! ");
}




//--------------------------------------------------------SLIDER DO BANNER PRINCIPAL--------------------------------------------------------

let slider = [];
slider.push('https://images.pexels.com/photos/8945233/pexels-photo-8945233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
slider.push('https://images.pexels.com/photos/8945128/pexels-photo-8945128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
slider.push('https://images.pexels.com/photos/8945175/pexels-photo-8945175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
slider.push('https://images.pexels.com/photos/8945248/pexels-photo-8945248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
slider.push('https://images.pexels.com/photos/8945242/pexels-photo-8945242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');


let sliderTexto = [];
sliderTexto.push('COLEÇÃO PRIMAVERA VERÃO');
sliderTexto.push('');
sliderTexto.push('');
sliderTexto.push('');
sliderTexto.push('');
sliderTexto.push('');
sliderTexto.push('');
sliderTexto.push('');

let i =0;

function proximo(){
    if(i== slider.length-1){
        i=0;
    }
    else{
        i++;
    }
    document.getElementById('imagenGrande').src = slider[i];
    document.getElementById('titulo-slider').innerHTML= sliderTexto[i];
}
function anterior(){
    if(i <= 0){
        i = slider.length-1;
    }
    else {
        i--;
    }
    document.getElementById('imagenGrande').src = slider[i];
    document.getElementById('titulo-slider').innerHTML=sliderTexto[i];

}
//setInterval(proximo, 8000);




//-----------------------------------------------------------VALIDANDO FORMULARIO-----------------------------------------------------

//-------------------------------------------------NOME
function verificarNome() {
    let nome = document.getElementById("nome").value;

    nome = nome.trim(nome);
    nome = nome.toLowerCase();
    document.getElementById("nome").value = nome;

    if( nome.includes('1') ||
        nome.includes("2") ||
        nome.includes("3") ||
        nome.includes('4') ||
        nome.includes("5") ||
        nome.includes("6") ||
        nome.includes('7') ||
        nome.includes("8") ||
        nome.includes("0")) {

        document.getElementById("aviso").innerHTML= '';
        document.getElementById("nome").style.borderColor="red";
        document.getElementById("aviso").style.color="red";
    }
    else if (nome.includes('!') ||
            nome.includes("@") ||
            nome.includes("#") ||
            nome.includes('$') ||
            nome.includes("%") ||
            nome.includes("&") ||
            nome.includes('*') ||
            nome.includes("+") ||
            nome.includes("-")) { 

            document.getElementById('aviso').innerHTML= '';
            document.getElementById('nome').style.borderColor = "red";
            document.getElementById('aviso').style.color = "red";
    }
    if(document.getElementById("nome").value.length == 0){
        document.getElementById('aviso').innerHTML= '';
        document.getElementById('nome').style.borderColor = "red";
        document.getElementById('aviso').style.color = "red";
    }
    else {
    document.getElementById("aviso").innerHTML = '';
    document.getElementById("nome").style.borderColor = "green";
    document.getElementById("aviso").style.color = "green";
    }

}    
//--------------------------------------------------DATA NASCIMENTO
function verificarData(){
    let dateNascimento = document.getElementById("dataNasc").value;

    document.getElementById("dataNasc").value = dateNascimento;

    if(document.getElementById("dataNasc").value.length == " "){
        document.getElementById('aviso1').innerHTML= '';
        document.getElementById('dataNasc').style.borderColor = "red";
        document.getElementById('aviso1').style.color = "red";

    } else if(dateNascimento.length <= 8) { //05/08/1992
        document.getElementById('aviso1').innerHTML= '';
        document.getElementById('dataNasc').style.borderColor = "green";
        document.getElementById('aviso1').style.color = "green";
    }
    
}
//-----------------------------------------------------EMAIL

function verificarEmail () {
    let email = document.getElementById('email').value;

    email = email.trim();
    email = email.toLowerCase();
    document.getElementById('email').value = email;

    if(email.includes('@') && email.includes('.com')) {

        document.getElementById('email').value = email;
        document.getElementById('aviso2').innerHTML= '';
        document.getElementById('email').style.borderColor = 'green';
        document.getElementById('aviso2').style.color = 'green';
    }
    else {
        document.getElementById('aviso2').innerHTML= '';
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('aviso2').style.color = "red";
    }

}
//--------------------------------------------------TELEFONE

function verificarTelefone(){
    let telefone = document.getElementById("telefone").value;

    document.getElementById("telefone").value = telefone;

    if(telefone.length == 9) { // 98220-8992
        let formataTelefone = telefone.includes(0,6)+ " - " +telefone.includes(8,9);
       
        document.getElementById('telefone').value = formataTelefone;
        document.getElementById('aviso3').innerHTML= telefone;
        document.getElementById('telefone').style.borderColor = 'green';
        document.getElementById('aviso3').style.color = 'green';

    }
    else{
        document.getElementById('aviso3').innerHTML= '';
        document.getElementById('telefone').style.borderColor = "red";
        document.getElementById('aviso3').style.color = "red";
    }
}
//--------------------------------------------------TELEFONE

function verificarEndereco() {
    let endereco = document.getElementById('iEndereço').value;
     endereco = endereco.trim()
     endereco = endereco.toLowerCase();

     document.getElementById('iEndereço').value = endereco;

    if( endereco.includes('!')
    ||  endereco.includes('@')
    ||  endereco.includes('#') 
    ||  endereco.includes('$') 
    ||  endereco.includes('%') 
    ||  endereco.includes('&')
    ||  endereco.includes('+') 
    ||  endereco.includes('-')) {

        document.getElementById('iEndereço').value = endereco;
        document.getElementById('iEndereço').style.borderColor = "red";
        document.getElementById('aviso4').style.color = "red";
    } 
    else if(document.getElementById("iEndereço").value.length == 0){
        document.getElementById('aviso4').innerHTML= '';
        document.getElementById('iEndereço').style.borderColor = "red";
        document.getElementById('aviso4').style.color = "red";
    }
    else {
        document.getElementById('iEndereço').value = endereco;
        document.getElementById('iEndereço').style.borderColor = 'green';
        document.getElementById('aviso4').style.color = 'green';
    }  

}

