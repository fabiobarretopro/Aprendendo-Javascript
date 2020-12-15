
const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.querySelector("#newsletterFeedback")


function cadastrarEmail(){
            let email = txtEmail.value
            msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}