/*function enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")

    if(nome.value != "" && nome.value.indexOf(" ")!=-1){
        alert(nome.value+ " agradecemos o seu contato")
             if(email.value.indexOf("@")!=1){
                alert(nome.value+ " agradecemos o seu contato")
             }
             else{
                alert("Preencha um email valido")
             }
    }
    else{
        alert("preencha seu nome completo")
    }

}*/
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obter os valores do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Aqui você pode implementar a lógica para enviar os dados do formulário para um servidor, salvar em um banco de dados, etc.
    
    // Exemplo de alerta com os dados inseridos
    alert("Nome: " + name + "\nEmail: " + email + "\nMensagem: " + message);
});
