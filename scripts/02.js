
    let imagem = document.querySelector("#Foto01")
    
    imagem.addEventListener("click", function() {
    let meuSrc = imagem.getAttribute("src") ;
        
    
         if(meuSrc==="images/redesocial2.jpg") {
            imagem.setAttribute("src", "images/grafos.jpg" )
         }else{
            imagem.setAttribute("src", "images/redesocial2.jpg")
         }
        })
        let imagemP = document.querySelector("#FotoP")
    
        imagemP.addEventListener("click", function() {
        let meuSrc = imagemP.getAttribute("src") ;
            
        
             if(meuSrc==="images/euler.jpg") {
                imagemP.setAttribute("src", "images/pontes.jpg" )
             }else{
                imagemP.setAttribute("src", "images/euler.jpg")
             }
            })


            let imagemP2 = document.querySelector("#FotoP2")
    
            imagemP2.addEventListener("click", function() {
            let meuSrc = imagemP2.getAttribute("src") ;
                
            
                 if(meuSrc==="images/manuel.jpg") {
                    imagemP2.setAttribute("src", "images/livrocastells.webp" )
                 }else{
                    imagemP2.setAttribute("src", "images/manuel.jpg")
                 }
                })


                let imagemP3 = document.querySelector("#FotoP3")
    
                imagemP3.addEventListener("click", function() {
                let meuSrc = imagemP3.getAttribute("src") ;
                    
                
                     if(meuSrc==="images/zuck.webp") {
                        imagemP3.setAttribute("src", "images/dadosface.png" )
                     }else{
                        imagemP3.setAttribute("src", "images/zuck.webp")
                     }
                    })




        let imagem2 = document.querySelector("#Foto02")
    
        imagem2.addEventListener("click", function() {
        let meuSrc2 = imagem2.getAttribute("src") ;
            
        
             if(meuSrc2==="images/primaveraArabe.avif") {
                imagem2.setAttribute("src", "images/qanon.jpg" )
             }else{
                imagem2.setAttribute("src", "images/primaveraArabe.avif")
             }
            })
        