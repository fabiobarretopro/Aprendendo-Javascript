function calcular(){
     let num = document.querySelector("input#n")
     let res = document.querySelector("select#seltab")
     if (num.value.length == 0){
            alert("Por favor, digite um número!")
                 
     }else{
            let n = Number(num.value)
            res.innerHTML = ""
            for (let c = 0; c <= 10; c += 1){
                        let op = document.createElement("option")
                        op.innerHTML = `${n} x ${c} = ${c * n}`
                        res.value = `res${c}`
                        res.appendChild(op)
            }   
     }
        
}