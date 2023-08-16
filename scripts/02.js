
    let imagem = document.querySelector("#Foto01")
    
    imagem.addEventListener("click", function() {
    let meuSrc = imagem.getAttribute("src") ;
        
    
         if(meuSrc==="images/ArmasDestruicao_Thumbnail_01.jpg") {
            imagem.setAttribute("src", "images/algmassa.jpeg" )
         }else{
            imagem.setAttribute("src", "images/ArmasDestruicao_Thumbnail_01.jpg")
         }
        })
    