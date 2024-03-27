import './style.css';
import Icon from './happyface.png';
import supabase from './config/supabaseClient';

//Components
import textInput from './components/textInput';
import metodosPago from './components/metodosPago';
import menuItem from './components/menuItem';
import horariosContainer from './components/horariosContainer';




const leftContainer = document.querySelector("#leftContainer");
leftContainer.append(textInput({id: "nombre", textContent: "Nombre"}));
leftContainer.append(textInput({id: "direccion", textContent: "Dirección"}));
leftContainer.append(textInput({id: "ubicacionUrl", textContent: "Ubicación URL"}));
leftContainer.append(metodosPago());
leftContainer.append(horariosContainer());




const botonGuardar =  document.querySelector('#guardarCarreta');
const nombreInput = document.querySelector('#nombre');
const direccionInput = document.querySelector('#direccion');
const ubicacionUrlInput = document.querySelector('#ubicacionUrl');
const efectivoInput = document.querySelector('#direccion');
const tarjetaInput = document.querySelector('#tarjeta');
const tapInput = document.querySelector('#tap')
const transferenciaInput = document.querySelector('#transferencia');
const otroInput = document.querySelector('#otro');
const otroDescInput = document.querySelector('#otroDesc');

const lunesAbiertoInput = document.querySelector('#lunesAbierto');
const lunesCierraInput = document.querySelector('#lunesCierra');
const lunesCerradoInput = document.querySelector('#lunesCerrado');

const martesAbiertoInput = document.querySelector('#martesAbierto');
const martesCierraInput = document.querySelector('#martesCierra');
const martesCerradoInput = document.querySelector('#martesCerrado');

const miercolesAbiertoInput = document.querySelector('#miercolesAbierto');
const miercolesCierraInput = document.querySelector('#miercolesCierra');
const miercolesCerradoInput = document.querySelector('#miercolesCerrado');

const juevesAbiertoInput = document.querySelector('#juevesAbierto');
const juevesCierraInput = document.querySelector('#juevesCierra');
const juevesCerradoInput = document.querySelector('#juevesCerrado');

const viernesAbiertoInput = document.querySelector('#viernesAbierto');
const viernesCierraInput = document.querySelector('#viernesCierra');
const viernesCerradoInput = document.querySelector('#viernesCerrado');

const sabadoAbiertoInput = document.querySelector('#sabadoAbierto');
const sabadoCierraInput = document.querySelector('#sabadoCierra');
const sabadoCerradoInput = document.querySelector('#sabadoCerrado');

const domingoAbiertoInput = document.querySelector('#domingoAbierto');
const domingoCierraInput = document.querySelector('#domingoCierra');
const domingoCerradoInput = document.querySelector('#domingoCerrado');

const guardarMenuBtn = document.querySelector("#guardarMenu");

let id = 0;


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "";
    element.classList.add("hello");

    const myIcon = new Image();
    myIcon.src = Icon;
  
    //element.appendChild(myIcon);
    
  //Fetch a la base da datos
      const fetchSmoothies = async () =>{
        const {data, error} = await supabase
          .from('carretas')
          .select()

          if(error){
            alert('Could not fetch smoothies');
          }
          if(data){
            console.log(data);
          }
      }

      fetchSmoothies();

    return element;

}
  
document.body.appendChild(component());


botonGuardar.addEventListener("click", async ()=>{
  //console.log("Boton guardar picado");
  let nombre = nombreInput.value;
  let direccion = direccionInput.value;
  let ubicacionurl = ubicacionUrlInput.value;

  let metodosdepago = {
    "tap": tapInput.checked,
    "otro": otroInput.checked,
    "tarjeta": tarjetaInput.checked,
    "efectivo": efectivoInput.checked,
    "otroDesc": otroDescInput.value,
    "transferencia": transferenciaInput.checked
  }

  let lunes = {
    "cerrado": lunesCerradoInput.checked,
    "abre": lunesAbiertoInput.value,
    "cierra": lunesCierraInput.value
  }

  let martes = {
    "cerrado": martesCerradoInput.checked,
    "abre": martesAbiertoInput.value,
    "cierra": martesCierraInput.value
  }

  let miercoles = {
    "cerrado": miercolesCerradoInput.checked,
    "abre": miercolesAbiertoInput.value,
    "cierra": miercolesCierraInput.value
  }

  let jueves = {
    "cerrado": juevesCerradoInput.checked,
    "abre": juevesAbiertoInput.value,
    "cierra": juevesCierraInput.value
  }

  let viernes = {
    "cerrado": viernesCerradoInput.checked,
    "abre": viernesAbiertoInput.value,
    "cierra": viernesCierraInput.value
  }

  let sabado = {
    "cerrado": sabadoCerradoInput.checked,
    "abre": sabadoAbiertoInput.value,
    "cierra": sabadoCierraInput.value
  }

  let domingo = {
    "cerrado": domingoCerradoInput.checked,
    "abre": domingoAbiertoInput.value,
    "cierra": domingoCierraInput.value
  }

  const {data, error} = await supabase
    .from('carretas')
    .insert([{nombre, direccion, ubicacionurl, metodosdepago, lunes, martes, miercoles, jueves, viernes, sabado, domingo}])
    .select()
    if(data){
      //console.log(data);
    }

    alert("Nueva carreta creada!")
})

let activeButtonsArray = [false, false, false, false, false, false, false]
const horaAbierto = document.querySelector("#horaAbierto");
const horaCerrado = document.querySelector("#horaCerrado");

horaAbierto.addEventListener('change', ()=>{
  console.log("Cambio horario abierto");
  applyGeneralHours();
})
horaCerrado.addEventListener('change', ()=>{
  console.log("Cambio horario cerrado");
  applyGeneralHours();
})

function checkActiveButtons(){
  /*
  const horarioL = document.querySelector("#horarioL");
  const horarioM = document.querySelector("#horarioM");
  const horarioMi = document.querySelector("#horarioMi");
  const horarioJ = document.querySelector("#horarioJ");
  const horarioV = document.querySelector("#horarioV");
  const horarioS = document.querySelector("#horarioS");
  const horarioD = document.querySelector("#horarioD");
  */
  nodelistBotonesHorarios.forEach((node, index)=>{
    if(node.classList.contains("onButton")){
      activeButtonsArray[index] = true;
    }
    else{
      activeButtonsArray[index] = false;
    }
  })
  applyGeneralHours();
}



function applyGeneralHours(){
  const nodelistHorarioGeneralAbierto = document.querySelectorAll(".horarioGeneralAbierto");
  const nodelistHorarioGeneralCerrado = document.querySelectorAll(".horarioGeneralCerrado");
  activeButtonsArray.forEach((element, index)=>{
    if(element){
      nodelistHorarioGeneralAbierto[index].value = horaAbierto.value;
      nodelistHorarioGeneralCerrado[index].value = horaCerrado.value;
    }
    else{
      nodelistHorarioGeneralAbierto[index].value = '';
      nodelistHorarioGeneralCerrado[index].value = '';
    }
  })

}

const nodelistBotonesHorarios = document.querySelectorAll(".horarioDia");
//console.log(nodelistBotonesHorarios);
nodelistBotonesHorarios.forEach((node, index)=>{
  node.addEventListener("click", ()=>{
    
    node.classList.toggle("onButton");
    checkActiveButtons();
  })
})

const tableBody = document.querySelector("#tableBody");
const addMenuItemBtn = document.querySelector("#addMenuItem");



tableBody.append(menuItem(id));
//addMenuItem(id);
/*
async function checkEmptyTableBody(){
  
  setTimeout(() => {
    let tableBody = document.querySelector("#tableBody"); 
    if(tableBody.childElementCount<1){
      console.log("TableBody is empty!");
      tableBody.append(menuItem(id));
    }
  }, 1);
}
*/
addMenuItemBtn.addEventListener("click", ()=>{
  console.log("new menu item");
  tableBody.append(menuItem(id));
  id++;
})

guardarMenuBtn.addEventListener("click", ()=>{
  console.log("Guardar menu!");
  saveMenu();
})

async function saveMenu(){
  let allMenuItemsNodelist = document.querySelectorAll(".tableRowContainer");
  console.log(allMenuItemsNodelist);
  allMenuItemsNodelist.forEach(async (node)=>{
    let platillo = node.childNodes[1].childNodes[0].value;
    let precio = node.childNodes[2].childNodes[0].value;
    let carreta_id = 1;
    console.log(`Item: "${platillo}"..... $${precio}`);

    const {data, error} = await supabase
    .from('menu')
    .insert([{platillo, precio, carreta_id}])
    .select()
    if(data){
      console.log(data);
    }
    })
  /*
  const {data, error} = await supabase
  .from('menu')
  .insert([{nombre, direccion, ubicacionurl, metodosdepago, lunes, martes, miercoles, jueves, viernes, sabado, domingo}])
  .select()
  if(data){
    //console.log(data);
  }
*/

}

