async function checkEmptyTableBody(id){
  
    setTimeout(() => {
      let tableBody = document.querySelector("#tableBody"); 
      if(tableBody.childElementCount<1){
        console.log("TableBody is empty!");
        tableBody.append(menuItem(id));
      }
    }, 1);
  }

function menuItem(id){
    let tableRow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let deleteOptionBtn = document.createElement("button");
    let inputText = document.createElement("input");
    let inputNumber = document.createElement("input"); 
  
    deleteOptionBtn.classList.add("addSectionBtn", "deleteOption");
    deleteOptionBtn.textContent = '-';
    deleteOptionBtn.addEventListener("click", ()=>{
      checkEmptyTableBody(id);
      deleteOptionBtn.parentElement.parentElement.remove();
    })
    inputText.type = "text";
    inputNumber.type = "number";
  
    td1.append(deleteOptionBtn);
    td2.append(inputText);
    td3.append(inputNumber);
  
    tableRow.append(td1, td2, td3);
    tableRow.id = id;
    tableRow.classList.add("tableRowContainer")
    
    return tableRow;
  }

  export default menuItem;
