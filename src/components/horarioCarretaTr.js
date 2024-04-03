function horarioCarretaTr(dia, diaData){
    let tableRow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    
    td1.textContent = dia;

    if(!diaData.cerrado){
        td2.textContent = `${diaData.abre} - ${diaData.cierra}`
    } else{
        td2.textContent = 'Cerrado';
    }
  
    tableRow.append(td1, td2);
    //tableRow.id = id;
    //tableRow.classList.add("tableRowContainer")
    
    return tableRow;
  }

  export default horarioCarretaTr;