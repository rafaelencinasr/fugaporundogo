function menuInputTable(){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let tbody = document.createElement('tbody');

    table.id = 'menuInputTable';
    th2.textContent = 'Item';
    th3.textContent = 'Precio';

    tbody.id = 'tableBody';

    tr.append(th1, th2, th3);
    thead.append(tr);

    table.append(thead, tbody);

    return table;

}

export default menuInputTable;