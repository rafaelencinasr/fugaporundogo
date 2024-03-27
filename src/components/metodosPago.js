import opcionPago from './opcionPago';

function metodosPago(){
    let metodosPagoContainer = document.createElement('div');
    let sectionHeader = document.createElement('div');

    metodosPagoContainer.classList.add('metodosPagoContainer', 'sectionContainer');

    sectionHeader.classList.add('section-header');
    sectionHeader.textContent = 'Métodos de pago'

    metodosPagoContainer.append(sectionHeader)
    metodosPagoContainer.append(opcionPago({id: "efectivo", textContent: "Efectivo"}));
    metodosPagoContainer.append(opcionPago({id: "tarjeta", textContent: "Tarjeta"}));
    metodosPagoContainer.append(opcionPago({id: "tap", textContent: "Tap to pay €"}));
    metodosPagoContainer.append(opcionPago({id: "transferencia", textContent: "Transferencia"}));
    metodosPagoContainer.append(opcionPago({id: "otro", textContent: "Otro", otro: true}));

    return metodosPagoContainer;

}

export default metodosPago;