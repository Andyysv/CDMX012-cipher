import cipher from './cipher.js';
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
 
   

 
   

