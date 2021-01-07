let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(1)
num.sort()


console.log(`Nosso vetor é o ${num}`)
console.log(`Existem ${num.length} elementos`)
console.log(`O valor 2 está na posição ${num.indexOf(2)}`)

for(let c in num){
            console.log(num[c])
}