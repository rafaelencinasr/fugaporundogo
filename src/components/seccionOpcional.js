function seccionOpcional(id){
    let seccionOpcional = document.createElement('div');
    let optionalSectionHeader = document.createElement('div');
    let optionalContent = document.createElement('div');
    let addSectionBtn = document.createElement('button');
    let optionalSectionName = document.createElement('div');

    seccionOpcional.classList.add('optional');
    optionalSectionHeader.classList.add('optionalSectionHeader');
    
    addSectionBtn.classList.add('addSectionBtn');
    addSectionBtn.textContent = '+';
    addSectionBtn.id = `optional${id}Btn`;

    addSectionBtn.addEventListener('click', ()=>{
        if(addSectionBtn.classList.contains('deleteOption')){
            addSectionBtn.textContent = '+';
            optionalContent.innerHTML = '';
        } else{
            addSectionBtn.textContent = '-';
            optionalContent.innerHTML = 'Aqui va el contenido opcional'; //menuTable component, upload picture component, etc 
        }
        addSectionBtn.classList.toggle("deleteOption");
    })

    optionalSectionName.textContent = id + ' (opcional)';

    optionalSectionHeader.append(addSectionBtn, optionalSectionName);

    optionalContent.id = `optional${id}`;

    seccionOpcional.append(optionalSectionHeader, optionalContent);

    return seccionOpcional;

}

export default seccionOpcional;