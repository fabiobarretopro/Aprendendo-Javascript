function verificar() {
            let data = new Date()
            let ano = data.getFullYear()
            let fAno = document.querySelector("input#txtano")
            let res = document.querySelector("div#res")
            if (fAno.value.length == 0 || fAno.value > ano){
                        alert("[ERRO] Verifique os dados e tente novamente!!")
            }else {
                       let fsex = document.getElementsByName("radsex")
                       let idade = ano - Number(fAno.value)
                       let genero = ""
                       let img = document.createElement("img")
                        img.setAttribute("id", "foto")
                       if (fsex[0].checked){
                                   genero = "Homem"
                                   if (idade >= 0 && idade < 10){
                                                img.setAttribute("src", "cmasculina.png")
                                   }else if ( idade < 21){
                                                img.setAttribute("src", "ado-masculino.png")
                                               }else if(idade < 50){
                                                img.setAttribute("src", "adu-masculino.png")
                                               } else{
                                                img.setAttribute("src", "ido-masculino.png")
                                               }        
                       }else if (fsex[1].checked){
                                   genero = "Mulher"
                                   if (idade >= 0 && idade < 10){
                                                img.setAttribute("src", "cfeminina.png")
                                    }else if ( idade < 21){
                                                img.setAttribute("src", "ado-feminino.png")
                                   }else if(idade < 50){
                                                img.setAttribute("src", "adu-feminino.png")
                                   } else{
                                                img.setAttribute("src", "ido-feminino.png")
                                   }  
                       }
                       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                       res.appendChild(img)
}  
}       
