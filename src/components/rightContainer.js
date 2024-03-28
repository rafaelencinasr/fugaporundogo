import seccionOpcional from "./seccionOpcional";

function rightContainer(){
    const rightContainer = document.createElement("div");
    rightContainer.id = 'rightContainer';
    rightContainer.classList.add('columnContainer');
    let optionalArray = ['Menu']; //'Foto', 'Barra', 'Menu', 'Mesas'

    optionalArray.forEach((element)=>{
    rightContainer.append(seccionOpcional(element));
    });

    return rightContainer;
}

export default rightContainer;