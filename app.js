// Buena suerte ! Espero que se te encianda la "bombilla"!


// tenemos que cambiar la clase de off a on y de on a off al hacer click en la bombilla "#bulb"

const bulbHTML = document.querySelector("#bulb");


// ( que quiero que escuche? , funcion con lo que quiero que haga )

bulbHTML.addEventListener('click', function () {
    // cambiar la clase de bulb-off a bulb-on
    if (bulbHTML.className === 'bulb-off') {
        bulbHTML.className = 'bulb-on';
        // aquí abajo creo que estaba puesto bulb-off y es bulb-on, ha sido por cortar y pegar...
    } else {
        // estaba mal el igual aquí abajo, estaba === y es =
        bulbHTML.className = 'bulb-off'
    }
})

// ahora sí funciona, míralo