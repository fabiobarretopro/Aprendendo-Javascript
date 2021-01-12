function carregar(){
            let msg = document.querySelector("#msg")
            let img = document.querySelector("#imagem")
            let data = new Date()
            let hora = data.getHours()
            msg.innerHTML = `Agora são ${hora} horas`
            if (hora >= 0 && hora < 12){
                        msg.innerHTML = `Agora são ${hora} horas`
                        img.src = "fotomanha.png"
                        document.body.style.background = "#cfc8a9"
            }else{
                        if (hora >= 12 && hora <18){
                                    msg.innerHTML = `Agora são ${hora} horas`
                                    img.src = "fototarde.png"
                                    document.body.style.background = "#da956a"
                        }else{
                                    msg.innerHTML = `Agora são ${hora} horas`
                                    img.src = "fotonoite.png"
                                    document.body.style.background = "#394b5a"
                        }
            }
}
