window.cipher = {

  // Función encode
  encode: (stringEncode, offsetEncode) => {

    // Cambio de string a mayúsculas
    const stringMayEncode = stringEncode.toUpperCase();
    // Cuenta cantidad de letras en el mensaje
    const charaEncode = stringMayEncode.length;
    // Declaración de variables
    let finalMessageEncode = '';
    let letterEncode = 0;
    let funEncode = 0;
    let letterResEncode = 0;

    // Contador de posición de letras en el mensaje
    for (let i = 0; i < charaEncode; i++) {
      // Establece posición ASCII de letra según ubicación en mensaje
      letterEncode = stringMayEncode.charCodeAt(i);
      // Operación matemática
      funEncode = 0;
      funEncode = ((letterEncode - 65 + offsetEncode) % 26 + 65);
      // Desde nueva ubicación calculada, se obtiene la nueva letra
      letterResEncode = String.fromCharCode(funEncode);
      // Concatenación del mensaje
      finalMessageEncode = finalMessageEncode + letterResEncode;
    }
    //Retorno de mensaje codificado
    return finalMessageEncode;
  },

  //Función decode, con la misma estructura que encode, cambio de variables y formula matemática
  decode: (stringDecode, offsetDecode) => {

    const stringMayDecode = stringDecode.toUpperCase();
    const charaDecode = stringMayDecode.length;
    let finalMessageDecode = '';
    let letterDecode = 0;
    let funDecode = 0;
    let letterResDecode = 0;

    for (let j = 0; j < charaDecode; j++) {
      letterDecode = stringMayDecode.charCodeAt(j);
      funDecode = 0;
      // Función matemática e If para pasar de ultima letra a la primera
      funDecode = letterDecode + (26 - (offsetDecode) % 26);
      if (90 < funDecode) {
        funDecode = funDecode % 90 + 64;
      }
      letterResDecode = String.fromCharCode(funDecode);
      finalMessageDecode = finalMessageDecode + letterResDecode;
    }
    return finalMessageDecode;
  },


  //Función que lee offset y retorna dos metodos que leen el mensaje
  createCipherWithOffset: (whitOffset) => {
    return {
      encode: (stringEncode) => {
        return window.cipher.encode(stringEncode, whitOffset);
      },

      decode: (stringDecode) => {
        return window.cipher.decode(stringDecode, whitOffset);
      }
    };
  }
};
