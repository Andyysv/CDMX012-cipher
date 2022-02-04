const cipher = {
  encode: (offset, msnU) => {
    let cipherMsn = '';
    if (msnU === null || msnU === undefined) {
    throw new TypeError ("No ingreso su texto");
    } else {
    if (offset === null ||undefined)
    throw new TypeError ("No ingreso su número"); 
    }
    //ciclo de string 
    for (let a = 0; a < msnU.length; a++) {
      let letraAscii = msnU.charCodeAt(a);
      if (letraAscii >= 65 && letraAscii <= 90) {
        let cifradoCesar = ((letraAscii - 65 + parseInt(offset)) % 26 + 65);
        let nuevaLetra = String.fromCharCode(cifradoCesar); 
        cipherMsn += nuevaLetra;
      } else if (letraAscii >= 97 && letraAscii <= 122) {
        let cifradoCesar = ((letraAscii - 97 + parseInt(offset)) % 26 + 97);
        let nuevaLetra = String.fromCharCode(cifradoCesar);
        cipherMsn += nuevaLetra;
      } else if (letraAscii >= 32 && letraAscii <= 47) {
        cipherMsn= cipherMsn + msnU[a];
      }
      console.log (cipherMsn)
      //cipherMsn= cipherMsn + msnU[a];
    } 
    return cipherMsn;
  },
  decode: function (offset, msnU) {
    let cipherMsn = '';
    if (msnU === null || msnU === undefined) {
      throw new TypeError ("No ingreso su texto");
      } else if (offset === null ||undefined) {
      throw new TypeError ("No ingreso su número"); 
      }
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
      } else if (letraAscii >= 32 && letraAscii <= 47) {
        cipherMsn= cipherMsn + msnU[a];
      }
    }
    return cipherMsn;
  }
}
export default cipher;
