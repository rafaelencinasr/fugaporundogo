import botonHorarioGeneral from "./botonHorarioGeneral";

function horariosGeneral(){
    let horariosGeneral = document.createElement('div');
    let divContainer = document.createElement('div');
    let horarioGeneralContainer = document.createElement('div');
    let inputAbierto = document.createElement('input');
    let inputCerrado = document.createElement('input');

    horariosGeneral.id = 'horarios-general';
    let diasArray = ['L', 'M', 'Mi', 'J', 'V', 'S', 'D'];
    diasArray.forEach((element)=>{
        divContainer.append(botonHorarioGeneral(`horario${element}`, element));
    })

    inputAbierto.type = 'time';
    inputAbierto.name = 'horaAbierto';
    inputAbierto.id = 'horaAbierto';

    inputCerrado.type = 'time';
    inputCerrado.name = 'horaCerrado';
    inputCerrado.id = 'horaCerrado';

    horarioGeneralContainer.append(inputAbierto, '-', inputCerrado);

    horariosGeneral.append(divContainer, horarioGeneralContainer);

    return horariosGeneral;
    
}

export default horariosGeneral;