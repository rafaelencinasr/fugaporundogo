import textInput from './textInput';
import metodosPago from './metodosPago';
import horariosContainer from './horariosContainer';
import horariosIndividualesContainer from './horariosIndividualesContainer';

function leftContainer(){
    const leftContainer = document.createElement("div");
    leftContainer.id = 'leftContainer';
    leftContainer.classList.add('columnContainer');

    leftContainer.append(textInput({id: "nombre", textContent: "Nombre"}));
    leftContainer.append(textInput({id: "direccion", textContent: "Dirección"}));
    leftContainer.append(textInput({id: "ubicacionUrl", textContent: "Ubicación URL"}));
    leftContainer.append(metodosPago());
    leftContainer.append(horariosContainer());
    leftContainer.append(horariosIndividualesContainer());

    return leftContainer;
}

export default leftContainer;