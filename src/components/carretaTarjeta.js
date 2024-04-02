function carretaTarjeta(data, abierto){
    const carretaTarjeta = document.createElement("a");
    carretaTarjeta.classList.add('carretaTarjeta');

    const bookmark = document.createElement('div');
    bookmark.classList.add('bookmark');
    bookmark.textContent = '⭐';

    const tarjetaImagen = document.createElement('img');
    tarjetaImagen.classList.add('tarjetaImagen');
    tarjetaImagen.src = './img/carreta1.png';
    tarjetaImagen.alt = 'Imagen de carreta 1';
    if(!abierto){
        tarjetaImagen.classList.add('carretaCerrada');
    }

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

    const fechaHoy = new Date();
    let diaHoy = fechaHoy.getDay();

    let horarioHoy = data.dias_horarios[diaHoy-1];
    let cerradoHoy = horarioHoy.cerrado;
    let horaAbierto = horarioHoy.abre;
    let horaCerrado = horarioHoy.cierra;
    /*
    let horarioAyer;

      if(diaHoy >= 2){
        horarioAyer = data.dias_horarios[diaHoy-2];
      } else{ //Si hoy es Lunes, el horario de ayer es el del domingo, array[6]
        horarioAyer = data.dias_horarios[6]; 
      }

      let cerradoAyer = horarioAyer.cerrado;
      let horaCerradoAyer = horarioAyer.cierra;
    */
      //console.log('-------------------');
    //console.log(data.nombre);

    let horaTest = fechaHoy.toLocaleTimeString('en-GB'/*[] , {hour: '2-digit', minute:'2-digit'} */);
    let fechaActual = new Date(`April 1, 2024 ${horaTest}`);
    //console.log('Fecha actual fake : ' +fechaActual);

    let fechaCierre;
    if(horaCerrado<horaAbierto){
        fechaCierre = new Date(`April 2, 2024 ${horaCerrado}`);
    } else{
        fechaCierre = new Date(`April 1, 2024 ${horaCerrado}`);
    }
    //console.log('Fecha cierre fake : ' + fechaCierre);

    let tiempoParaCierre = (fechaCierre.getTime() - fechaActual.getTime())/60000;   //Minutos
    tiempoParaCierre = Math.abs(Math.ceil(tiempoParaCierre));
    let horasParaCierre = Math.floor(tiempoParaCierre/60)   //horas
    let minutosParaCierre = tiempoParaCierre%60   //Minutos
    //console.log(`Cierra en ${horasParaCierre} horas, ${minutosParaCierre} minutos`);

    let stringTiempoEspera;
    if(horasParaCierre >= 2){
        stringTiempoEspera = `Cierra en ${horasParaCierre} horas, ${minutosParaCierre} minutos`;
    } else if(horasParaCierre == 1){
        stringTiempoEspera = `Cierra en ${horasParaCierre} hora, ${minutosParaCierre} minutos`;
    } else{
        stringTiempoEspera = `Cierra en ${minutosParaCierre} minutos`;
    }

    let fechaAbierto = new Date(`April 1, 2024 ${horaAbierto}`);
    let tiempoParaAbrir = (fechaAbierto.getTime() - fechaActual.getTime())/60000;   //Minutos
    tiempoParaAbrir = Math.abs(Math.ceil(tiempoParaAbrir));
    let horasParaAbrir = Math.floor(tiempoParaAbrir/60)   //horas
    let minutosParaAbrir = tiempoParaAbrir%60   //Minutos

    if(!abierto){
        if(horasParaAbrir >= 2){
            stringTiempoEspera = `Abre en ${horasParaAbrir} horas, ${minutosParaAbrir} minutos`;
        } else if(horasParaAbrir == 1){
            stringTiempoEspera = `Abre en ${horasParaAbrir} hora, ${minutosParaAbrir} minutos`;
        } else{
            stringTiempoEspera = `Abre en ${minutosParaAbrir} minutos`;
        }
    }
    


    const horarioCarreta = document.createElement('div');
    horarioCarreta.classList.add('horarioCarreta');

    const cierraEn = document.createElement('div');
    cierraEn.classList.add('cierraEn');
    cierraEn.textContent = stringTiempoEspera; //Informacion de DB + calculo vs hora actual

    const abreCierraHorario = document.createElement('div');
    abreCierraHorario.classList.add('abreCierraHorario');
    abreCierraHorario.textContent = horaAbierto + " - " + horaCerrado;  //Informacion de DB por dia vs dia actual

    horarioCarreta.append(cierraEn, abreCierraHorario);

    tarjetaInfo.append(nombreCarreta, calificacionCarreta, direccionCarreta, metodosPagoCarreta, horarioCarreta);

    /////////////// Boton fuga /////////////// 
    const botonFuga = document.createElement('a');
    botonFuga.classList.add('botonFuga');
    botonFuga.href = data.ubicacionurl;
    botonFuga.target = '_blank';
    if(!abierto){
        botonFuga.classList.add('carretaCerrada');
    }

    const decorationContainer1 = document.createElement('div');
    decorationContainer1.classList.add('decorationContainer');
    const buttonDecoration1 = document.createElement('div');
    buttonDecoration1.classList.add('buttonDecoration');
    const buttonDecoration2 = buttonDecoration1.cloneNode();

    decorationContainer1.append(buttonDecoration1, buttonDecoration2);
    const decorationContainer2 = decorationContainer1.cloneNode(true);

    botonFuga.append(decorationContainer1, 'FUGA', decorationContainer2);

    tarjetaCuerpo.append(tarjetaInfo, botonFuga);

    carretaTarjeta.href = `./carretas.html?id=${data.id}`

    carretaTarjeta.append(bookmark, tarjetaImagen, tarjetaCuerpo);


    return carretaTarjeta
}

export default carretaTarjeta;