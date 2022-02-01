const cipher = {
  encode: (offset, msnU) => {
    //let alphabet= "abcdefghijklmnopqrstwyz".split("");
    //let cipherBox = document.getElementById("cipherBox");
    console.log(offset, msnU)
    let cipherMsn = '';
    //ciclo de string 
    for (let a = 0; a < msnU.length; a++) {
      console.log(msnU[a])
      let letraAscii = msnU.charCodeAt(a);
      console.log(letraAscii)
      if (letraAscii >= 65 && letraAscii <= 90) {
        let cifradoCesar = ((letraAscii - 65 + parseInt(offset)) % 26 + 65);
        let nuevaLetra = String.fromCharCode(cifradoCesar);
        cipherMsn += nuevaLetra;
        console.log(String.fromCharCode(cifradoCesar));
      } else if (letraAscii >= 97 && letraAscii <= 122) {
        let cifradoCesar = ((letraAscii - 97 + parseInt(offset)) % 26 + 97);
        let nuevaLetra = String.fromCharCode(cifradoCesar);
        cipherMsn += nuevaLetra;
        console.log(String.fromCharCode(cifradoCesar));
      }
    } console.log(cipherMsn); return cipherMsn;
  },

  decode: function (offset, msnU) {
    let cipherMsn = '';
    for (let a = 0; a < msnU.length; a++) {
      let letraAscii = msnU.charCodeAt(a);
      if (letraAscii >= 65 && letraAscii <= 90) {
        let cifradoCesar2 = ((letraAscii - 90 - parseInt(offset)) % 26 + 90);
        let nuevaLetra = String.fromCharCode(cifradoCesar2);
        cipherMsn += nuevaLetra;
        console.log(cipherMsn);
      } else if (letraAscii >= 97 && letraAscii <= 122) {
        let cifradoCesar2 = ((letraAscii - 97 - parseInt(offset)) % 26 + 97);
        let nuevaLetra = String.fromCharCode(cifradoCesar2);
        cipherMsn += nuevaLetra;
        console.log(cipherMsn);
      }
    }
    return cipherMsn;
  }

}
export default cipher;
