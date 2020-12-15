(function(){
            const nameUser = " Fábio"

            if(nameUser){
                        const topBar = document.createElement("div")
                        topBar.className = "top-bar"
                        topBar.innerHTML = `<p>Olá,  <b> ${nameUser}</b></p>`

                        const elementoPai = document.querySelector(".hero") 
                        elementoPai.insertBefore(topBar, elementoPai.firstChild)
            }
})()