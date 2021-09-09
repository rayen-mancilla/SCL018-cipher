
//Este es el objeto que contiene las funciones de Cifrar y Descrifrar
const cipher = {
  encode (textEncode,offSet) {
    let text = "";
     for(let i=0; i <textEncode.length; i++) {
       let asciiCode = textEncode.charCodeAt(i)
       let formula = (asciiCode - 65 + offSet)% 26 + 65;
       if(asciiCode === 32) {formula = 32;}
       let newPosition = String.fromCharCode(formula);
       text += newPosition
     }
     return text;
   },
 
   decode (textDecode,offSet) {
     let text2 = "";
     for( let i=0; i <textDecode.length; i++){
       let asciiCode2 = textDecode.charCodeAt(i)
       let formula2 = (asciiCode2 + 65 - offSet)% 26 + 65;
       if(asciiCode2 === 32) {formula2 = 32;}
       let newPosition2 = String.fromCharCode(formula2);
       text2 += newPosition2
     }
     return text2;
   }
};

export default cipher;

