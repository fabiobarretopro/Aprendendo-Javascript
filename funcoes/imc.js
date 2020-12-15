//IMC =  peso / (altura**2)

function calcularIMC(peso, altura){
            if (peso === undefined || altura === undefined){
                        throw Error("Need two parameters: weight and height")
            }
            return peso / (altura**2)
}

function classificarIMC