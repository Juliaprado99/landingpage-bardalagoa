function cadastrar(){
    var cadastro = document.getElementById("cadastro");
    var input = document.getElementById("email");
    if (input.value.length < 5){
        cadastro.innerHTML= (`Verifique seu email e tente novamente.`);
        cadastro.style.color = "red"
        input.style.border = "solid 1px red"

    }else{
    cadastro.innerHTML=(`Seu cadastro foi realizado!`);
    cadastro.style.color = "green"
    input.style.border = "solid 1px green"


}}