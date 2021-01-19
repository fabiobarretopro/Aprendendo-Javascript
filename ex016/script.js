function calcular(){
            let inicio = document.querySelector("input#ini")
            let fim = document.querySelector("input#fim")
            let passo = document.querySelector("input#pas")
            let res = document.querySelector("div#res")
            if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
                        alert("Erro! Faltam dados!")
                        res.innerHTML = "Impossível contar!"
            } else{
                        res.innerHTML = "Contando... <br/>"
                        let i = Number(inicio.value)
                        let f = Number(fim.value)
                        let p = Number(passo.value)
                        if (p <= 0){
                                    alert("Passo inválido! Passo = 1" )
                                    p = 1
                        }
                        if (i < f){
                                    for(let c = i; c <= f; c = c + p){
                                                res.innerHTML = res.innerHTML + ` ${c} \u{1F449}`
                                    }
                                    
                        }else{
                                    for(let c = i; c >= f; c -= p){
                                                res.innerHTML = res.innerHTML + ` ${c} \u{1F449}`
                                    }
                        }
                        res.innerHTML = res.innerHTML + ` \u{1F3C1}` 
            }
            
}