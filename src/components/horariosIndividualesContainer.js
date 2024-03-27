import horarioIndividual from "./horarioIndividual";

function horariosIndividualesContainer(){
    let horariosIndividualesContainer = document.createElement('div');
    horariosIndividualesContainer.id = 'horariosIndividualesContainer';

    //Aqui van a ir forEach de horarioIndividual

    let diasArray = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    diasArray.forEach((element)=>{
        horariosIndividualesContainer.append(horarioIndividual(element));
    })

    return horariosIndividualesContainer;
}

export default horariosIndividualesContainer;