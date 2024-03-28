function textInput(info){
    let textInputContainer = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');

    textInputContainer.classList.add('textInputContainer', 'sectionContainer');
    
    label.htmlFor = info.id;
    label.textContent = info.textContent;

    input.type = 'text';
    input.name = info.id;
    input.id = info.id;
    textInputContainer.append(label, input);

    return textInputContainer
}

export default textInput;