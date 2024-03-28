function guardarCarretaBtn(){
    let guardarCarretaBtn = document.createElement('button');
    let decorationContainer = document.createElement('div');
    let buttonDecoration = document.createElement('div');

    guardarCarretaBtn.id = 'guardarCarreta';
    decorationContainer.classList.add('decorationContainer');
    buttonDecoration.classList.add('buttonDecoration');
    let buttonDecoration2 = buttonDecoration.cloneNode();

    decorationContainer.append(buttonDecoration, buttonDecoration2);
    let decorationContainer2 = decorationContainer.cloneNode(true);

    guardarCarretaBtn.append(decorationContainer, "GUARDAR", decorationContainer2);

    return guardarCarretaBtn;
}

export default guardarCarretaBtn;