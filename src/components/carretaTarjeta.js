function carretaTarjeta(data){
    const carretaTarjeta = document.createElement("div");
    carretaTarjeta.classList.add('carretaTarjeta');

    const bookmark = document.createElement('div');
    bookmark.classList.add('bookmark');
    bookmark.textContent = '⭐';

    const tarjetaImagen = document.createElement('img');
    tarjetaImagen.classList.add('tarjetaImagen');
    tarjetaImagen.src = '../src/img/carreta1.png';
    tarjetaImagen.alt = 'Imagen de carreta 1';

    const tarjetaCuerpo = document.createElement('div');
    tarjetaCuerpo.classList.add('tarjetaCuerpo');

    /////////////// Tarjeta info ///////////////
    const tarjetaInfo = document.createElement('div');
    tarjetaInfo.classList.add('tarjetaInfo');

    const nombreCarreta = document.createElement('div');
    nombreCarreta.classList.add('nombreCarreta');
    nombreCarreta.textContent = data.nombre;        

    const calificacionCarreta = document.createElement('div');
    calificacionCarreta.classList.add('calificacionCarreta');
    calificacionCarreta.textContent = '⭐⭐⭐⭐⭐ 4.95 (278)';      //Informacion de DB

    const direccionCarreta = document.createElement('div');
    direccionCarreta.classList.add('direccionCarreta');
    direccionCarreta.textContent = data.direccion;      

    const metodosPagoCarreta = document.createElement('div');
    metodosPagoCarreta.classList.add('metodosPagoCarreta');
    let metodosDePagoArray = ['Efectivo','Tarjeta', 'Tap to pay €', 'Transferencia', 'Otro'];
    let metodosDePagoString = ''
    if(data.metodosdepago.efectivo){
        metodosDePagoString += "Efectivo";
    }
    if(data.metodosdepago.tarjeta){
        metodosDePagoString += ", Tarjeta";
    }
    if(data.metodosdepago.tap){
        metodosDePagoString += ", Tap to pay €";
    }
    if(data.metodosdepago.transferencia){
        metodosDePagoString += ", Transferencia";
    }
    if(data.metodosdepago.otro){
        metodosDePagoString += ", Otro: " + data.metodosdepago.otroDesc;
    }
    metodosPagoCarreta.textContent = metodosDePagoString;  //Informacion de DB

    const horarioCarreta = document.createElement('div');
    horarioCarreta.classList.add('horarioCarreta');

    const cierraEn = document.createElement('div');
    cierraEn.classList.add('cierraEn');
    cierraEn.textContent = 'Cierra en 25 minutos'; //Informacion de DB + calculo vs hora actual

    const abreCierraHorario = document.createElement('div');
    abreCierraHorario.classList.add('abreCierraHorario');
    abreCierraHorario.textContent = '(18:30 - 23:00)';  //Informacion de DB por dia vs dia actual

    horarioCarreta.append(cierraEn, abreCierraHorario);

    tarjetaInfo.append(nombreCarreta, calificacionCarreta, direccionCarreta, metodosPagoCarreta, horarioCarreta);

    /////////////// Boton fuga /////////////// 
    const botonFuga = document.createElement('a');
    botonFuga.classList.add('botonFuga');
    botonFuga.href = data.ubicacionurl;
    botonFuga.target = '_blank';

    const decorationContainer1 = document.createElement('div');
    decorationContainer1.classList.add('decorationContainer');
    const buttonDecoration1 = document.createElement('div');
    buttonDecoration1.classList.add('buttonDecoration');
    const buttonDecoration2 = buttonDecoration1.cloneNode();

    decorationContainer1.append(buttonDecoration1, buttonDecoration2);
    const decorationContainer2 = decorationContainer1.cloneNode(true);

    botonFuga.append(decorationContainer1, 'FUGA', decorationContainer2);

    tarjetaCuerpo.append(tarjetaInfo, botonFuga);

    carretaTarjeta.append(bookmark, tarjetaImagen, tarjetaCuerpo);


    return carretaTarjeta
}

export default carretaTarjeta;