import './style.css';
import './carretas.css';
import supabase from "./config/supabaseClient";
import tituloCarreta from './components/tituloCarreta';
import menuItemGenerator from './components/menuItemGenerator';
import horarioCarretaTr from './components/horarioCarretaTr';
import navbar from './components/navbar';

const menuContainer = document.querySelector('#menuContainer');
const direccionInfo = document.querySelector('#direccionInfo');
const metodosDePagoInfo = document.querySelector('#metodosDePagoInfo');
const horariosTablaBody = document.querySelector('#horariosTabla');
//navbar();

let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el ID del producto que queremos mostrar
let carreta_id = params.get("id"); // Se extrae especificamente el valor de id=
console.log("id= " + carreta_id);

let metodosDePagoString = '';
let diasArray = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const {data, error} = await supabase
    .from('carretas')
    .select()
    .eq('id', carreta_id);
    if(data){
      /* Direccion */
      direccionInfo.textContent = data[0].direccion;
      /* Metodos de pago */
      if(data[0].metodosdepago.efectivo){metodosDePagoString += "Efectivo";}
      if(data[0].metodosdepago.tarjeta){metodosDePagoString += ", Tarjeta";}
      if(data[0].metodosdepago.tap){metodosDePagoString += ", Tap to pay €";}
      if(data[0].metodosdepago.transferencia){metodosDePagoString += ", Transferencia";}
      if(data[0].metodosdepago.otro){metodosDePagoString += ", Otro: " + data[0].metodosdepago.otroDesc;}
      metodosDePagoInfo.textContent = metodosDePagoString;
      diasArray.forEach((dia, index)=>{
        horariosTablaBody.append(horarioCarretaTr(dia, data[0].dias_horarios[index]));
      })
      /* Horarios */
    };

async function getMenuItems(carreta){
  const {data, error_menu} = await supabase
  .from('menu')
  .select()
  .eq('carreta_id', carreta)
  .order('recomendaciones', {ascending: false})
  if(data){
    console.log(data);
    data.forEach((menuItem, index)=>{
      menuContainer.append(menuItemGenerator(menuItem.platillo, menuItem.precio, index<=2));
    })
  } else{
    console.log(error_menu);
  };
}

async function getCarretas(){
  const {data, error} = await supabase
    .from('carretas')
    .select()
    if(data){
      console.log("Get carretas!")
      console.log(data);
    }
}
//getCarretas()

getMenuItems(carreta_id)


tituloCarreta(data[0].nombre);

const contentCarretas = document.querySelector('#contentCarretas');


    //const bisteck = menuItemGenerator("BISTECK", 2.59);
    //console.log(bisteck);
    //const pastor = menuItemGenerator("PASTOR", 1.39);
    //const campechanos = menuItemGenerator("CAMPECHANOS", 3.49);
    //const longaniza = menuItemGenerator("LONGANIZA", 2.09);
    //const suadero = menuItemGenerator("SUADERO", 2.89);

    //menuContainer.append(bisteck);

//content.append();
