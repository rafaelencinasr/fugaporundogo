function opcionPago(info){
    let opcionPago = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');

    opcionPago.classList.add('opcionPago');
    
    input.type = 'checkbox';
    input.name = info.id;
    input.id = info.id;

    label.htmlFor = info.id;
    label.textContent = info.textContent;

    opcionPago.append(input, label);

    if(info.otro){
        let inputTextOtro = document.createElement('input');
        inputTextOtro.type = 'text';
        inputTextOtro.name = 'otroDesc'
        inputTextOtro.id = 'otroDesc'

        opcionPago.append(inputTextOtro);
    }

    return opcionPago
}

export default opcionPago;