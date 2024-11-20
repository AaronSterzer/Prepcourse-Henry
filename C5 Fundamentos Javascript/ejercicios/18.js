function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
    if (letra.length === 1) {
      // Comprueba si la letra es una vocal
      letra = letra.toLowerCase() // tolowercase sirve para que aeiou en mayus o minus sea indiferente.
      if ("aeiou".includes(letra)) {
        return "Es vocal";
      } else {
        return "Dato incorrecto";
      }
    } else {
      return "Dato incorrecto";
    }
  }



module.exports = esVocal;