function addMenuItemBtn(){
    let addMenuItemBtn = document.createElement('button');
    addMenuItemBtn.classList.add('addSectionBtn', 'nuevoPlatillo');
    addMenuItemBtn.id = 'addMenuItem';
    addMenuItemBtn.textContent = '+ Nuevo platillo';

    return addMenuItemBtn;
}

export default addMenuItemBtn;