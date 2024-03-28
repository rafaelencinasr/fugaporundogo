import menuInputTable from "./menuInputTable";
import addMenuItemBtn from "./addMenuItemBtn.js";
import menuItem from "./menuItem";

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
            if(true){
                optionalContent.append(menuInputTable());
                optionalContent.append(addMenuItemBtn());
                const tableBody2 = document.querySelector("#tableBody");
                const addMenuItemBtn2 = document.querySelector("#addMenuItem");
            
                
                tableBody2.append(menuItem(1));
                addMenuItemBtn2.addEventListener("click", ()=>{
                    console.log("new menu item");
                    tableBody2.append(menuItem(1));
                    id++;
                  })
            }
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