(function(){
            function calcularMedia(){
                        let total = 0
                        let qtd = arguments.length
                        for(let i = 0; i < qtd; i = i + 1){
                                    if (typeof arguments[i] != "number"){
                                                throw Error("Only number!")
                                    }
                                    total = total + arguments[i]
                        }
                        return (total/qtd) || 0
            }
            let media = calcularMedia()
            console.log(media)
})()