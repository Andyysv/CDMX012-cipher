import cipher from './cipher.js';
//let msnU= document.getElementById("cipherBox").value;
// let offset= document.getElementById ("offset").value;

     //let desactivatedButton= document.getElementbyId ("desactivatedButton");
     //let descipherBox= document.getElementById("descipherBox");
     //function boton{
         // alert ()
     //}

     // cifrado
     document.getElementById ("activatedButton").addEventListener("click", function(){
      let msnU = document.getElementById ("cipherBox").value;
       let offset = document.getElementById ("offset").value;
        let caja = document.getElementById ("caja");   
        caja.innerHTML = "Tu texto es: "  + cipher.encode (offset, msnU); 
        })
     // descifrado
     document.getElementById ("desactivatedButton").addEventListener("click", function(){
        let msnU = document.getElementById ("cipherBox").value;
        let offset = document.getElementById ("offset").value;
        let caja2= document.getElementById ("caja2");
       caja2.innerHTML = "Tu texto es: "  + cipher.decode (offset, msnU); 
        })
     //let cipherBox = document.getElementById("cipherBox").value;
    //console.log (cipherBox.toUpperCase())
    //})
   
//función del boton de descifrado
//desactivatedButton.addEventListener("click", function(){
     //let descipherBox = document.getElementById("descipherBox").value;
    //console.log (descipherBox)
    //})
 
   

