const somar = function (){
            console.log(arguments)
            let total = 0
            for (let i = 0; i < arguments.length; i = i +1 ){
                        total = total + arguments[i]        
            }
            return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9))