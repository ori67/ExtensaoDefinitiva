
    let imagem = document.querySelector("#Foto01")
    
    imagem.addEventListener("click", function() {
    let meuSrc = imagem.getAttribute("src") ;
        
    
         if(meuSrc==="images/bigData.jpg") {
            imagem.setAttribute("src", "images/dados.jpg" )
         }else{
            imagem.setAttribute("src", "images/bigData.jpg")
         }
        })
        let imagemP = document.querySelector("#FotoP")
    
        imagemP.addEventListener("click", function() {
        let meuSrc = imagemP.getAttribute("src") ;
            
        
             if(meuSrc==="images/dados2.jpg") {
                imagemP.setAttribute("src", "images/dados3.jpg" )
             }else{
                imagemP.setAttribute("src", "images/dados2.jpg")
             }
            })


            let imagemP2 = document.querySelector("#FotoP2")
    
            imagemP2.addEventListener("click", function() {
            let meuSrc = imagemP2.getAttribute("src") ;
                
            
                 if(meuSrc==="images/mark-no-senado.jpg") {
                    imagemP2.setAttribute("src", "images/ceocram.jpg" )
                 }else{
                    imagemP2.setAttribute("src", "images/mark-no-senado.jpg")
                 }
                })


                let imagemP3 = document.querySelector("#FotoP3")
    
                imagemP3.addEventListener("click", function() {
                let meuSrc = imagemP3.getAttribute("src") ;
                    
                
                     if(meuSrc==="images/informal.jpg") {
                        imagemP3.setAttribute("src", "images/galo.jpeg")
                     }else{
                        imagemP3.setAttribute("src", "images/informal.jpg")
                     }
                    })




        let imagem2 = document.querySelector("#Foto02")
    
        imagem2.addEventListener("click", function() {
        let meuSrc2 = imagem2.getAttribute("src") ;
            
        
             if(meuSrc2==="images/ArmasDestruicao_Thumbnail_01.jpg") {
                imagem2.setAttribute("src", "images/ifood.jpg" )
             }else{
                imagem2.setAttribute("src", "images/ArmasDestruicao_Thumbnail_01.jpg")
             }
            })
        