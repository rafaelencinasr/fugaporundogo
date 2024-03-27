function botonHorarioGeneral(id, dia){
    let boton = document.createElement('button');
    boton.classList.add('horarioDia', 'off');
    boton.id = id;
    boton.textContent = dia;

    return boton;
}

export default botonHorarioGeneral;