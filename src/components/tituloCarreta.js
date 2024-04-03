function tituloCarreta(titulo){
    let tituloCarreta = document.querySelector('#tituloCarreta');
    let decorationContainer = document.createElement('div');
    let buttonDecoration = document.createElement('div');

    //tituloCarreta.id = 'tituloCarreta';
    decorationContainer.classList.add('decorationContainer');
    buttonDecoration.classList.add('buttonDecoration');
    let buttonDecoration2 = buttonDecoration.cloneNode();

    decorationContainer.append(buttonDecoration, buttonDecoration2);
    let decorationContainer2 = decorationContainer.cloneNode(true);

    tituloCarreta.append(decorationContainer, titulo, decorationContainer2);

    //return tituloCarreta;
}

export default tituloCarreta;