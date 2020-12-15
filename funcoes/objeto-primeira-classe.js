/*function fn(cb){
            console.log("Executar ação de Callback")
            console.log(typeof cb)
            cb()
}

fn(function(){
            console.log("Função passada por parametro.")
})*/

function fn2(n1){
            return function(n2){
                        return n1 * n2
            }
}

const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(funcao2)
console.log(mult)

function fn3(){
            return function(){
                        console.log("Função retornada por parâmetro")
            }
}

const funcao3 = fn3()
console.log(funcao3)