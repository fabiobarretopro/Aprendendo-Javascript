(function(){
            const  nameUser = null
            const mod = document.querySelector(".top-bar p")
            if(nameUser){  
                        mod.innerHTML= mod.innerHTML + "<b>"+nameUser+"</b>"
            }
            else{
                        //mod.style.display = "none"
                        //mod.remove()
                        const elementoParaRemover = mod.parentElement
                        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
            }
            console.log(mod)
 })()