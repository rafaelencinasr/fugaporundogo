import horariosGeneral from "./horariosGeneral";

function horariosContainer(){
    let horariosContainer = document.createElement('div');
    let sectionHeader = document.createElement('div');

    horariosContainer.classList.add('metodosPagoContainer', 'sectionContainer');

    sectionHeader.classList.add('section-header');
    sectionHeader.textContent = 'Horarios'

    horariosContainer.append(sectionHeader)
    horariosContainer.append(horariosGeneral());

    return horariosContainer;

}

export default horariosContainer;