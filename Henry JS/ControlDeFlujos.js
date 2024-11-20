function viajar (destino) {
    if (destino === 'Brasil') {
        console.log ('Gires a la IZQUIERDA')
    } else if (destino === 'Argentina') {
        console.log ('Gire a la DERECHA');
    } else {
        console.log ('Nos perdimos')
    }
}


viajar ('Argentina')


function PuedeManejar (edad) {
    if (edad >= 18) {
        console.log (true);
    } else {
        console.log (false);
    }
}

PuedeManejar ('17')