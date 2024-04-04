
function listItem(listId, href, textContent){
    const listItem = document.createElement('li');
    const listLink = document.createElement('a');
    
    listItem.id = listId;
    listLink.href = href;
    listLink.textContent = textContent;

    listItem.append(listLink);
    return listItem;
}

function navbar(){
const navbarContainer = document.querySelector("#navbar");
const navbarLogo = document.createElement('div');
navbarLogo.id = 'navbar-logo';
const navbarLinks = document.createElement('ul');
navbarLinks.id = 'navbar-links';
const inicio = listItem('inicio', './index.html', 'INICIO'); 
const top10 = listItem('top10', './top10.html', 'TOP 10');
const agregarCarreta = listItem('agregarCarreta', './agregarCarreta.html', 'AGREGAR CARRETA'); 
const miPerfil = listItem('miPerfil', './miPerfil.html', 'MI PERFIL');
const busqueda = listItem('busqueda', './busqueda.html', 'BARRA DE BUSQUEDA;');
const navbarBg = document.createElement("img");
navbarBg.id = 'navbarBgImage';
navbarBg.src = './img/navbar-bg.svg';

navbarLogo.textContent = 'FUGA POR UN DOGO';
navbarLinks.append(inicio, top10, agregarCarreta, miPerfil, busqueda);
navbarContainer.append(navbarLogo, navbarLinks, navbarBg);

}

export default navbar;