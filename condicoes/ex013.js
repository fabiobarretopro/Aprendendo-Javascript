var agora = new Date()
var diasem  = agora.getDay()

switch (diasem) {
            case 0:
            case 7:
                        console.log("Final de semana, vai descansar!!") 
                        break
            case 1:
            case 2:
            case 3:                       
            case 4:            
            case 5:
                        console.log("Dia de semana, levanta para trabalhar!!")       
                        break              
            default:
                        break;
}