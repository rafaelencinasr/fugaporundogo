function menuItemGenerator(name, price, top3){

    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menuItem");

    const itemName = document.createElement("div");
    itemName.classList.add("itemName","menuText");
    itemName.textContent = name;

    let itemPrice = document.createElement("div");
    itemPrice.classList.add("itemPrice","menuText");
    itemPrice.textContent = price;

    if(top3){
        console.log("Gourmet top 3: " + name);
        itemName.classList.add("top3");
    }

    menuItemContainer.append(itemName, itemPrice)

    return menuItemContainer;
}

export default menuItemGenerator;