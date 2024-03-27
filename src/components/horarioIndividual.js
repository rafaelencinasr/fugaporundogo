function horarioIndividual(id){
    let horarioIndividual = document.createElement('div');
    let diaHorario = document.createElement('div');
    let rangoHorarios = document.createElement('div');
    let inputHorarioAbierto = document.createElement('input');
    let inputHorarioCerrado = document.createElement('input');
    let checkboxCerrado = document.createElement('input');

    horarioIndividual.classList.add('horarioIndividual');

    let nombreDelDia = id.charAt(0).toUpperCase() + id.slice(1);

    diaHorario.classList.add('diaHorario');
    diaHorario.textContent = nombreDelDia;

    inputHorarioAbierto.type = 'time';
    inputHorarioAbierto.name = `${id}Abierto`;
    inputHorarioAbierto.id = `${id}Abierto`;
    inputHorarioAbierto.classList.add('horarioGeneralAbierto');

    inputHorarioCerrado.type = 'time';
    inputHorarioCerrado.name = `${id}Cierra`;
    inputHorarioCerrado.id = `${id}Cierra`;
    inputHorarioCerrado.classList.add('horarioGeneralCerrado');

    rangoHorarios.append(inputHorarioAbierto, '-', inputHorarioCerrado);

    checkboxCerrado.type = 'checkbox';
    checkboxCerrado.name = `${id}Cerrado`;
    checkboxCerrado.id = `${id}Cerrado`;

    horarioIndividual.append(diaHorario, rangoHorarios, checkboxCerrado);

    return horarioIndividual;
}

export default horarioIndividual;