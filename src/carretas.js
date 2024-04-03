import './style.css';
import './carretas.css';
import supabase from "./config/supabaseClient";
import tituloCarreta from './components/tituloCarreta';
import menuItemGenerator from './components/menuItemGenerator';

const menuContainer = document.querySelector('#menu');

let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el ID del producto que queremos mostrar
let carreta_id = params.get("id"); // Se extrae especificamente el valor de id=
console.log("id= " + carreta_id);

const {data, error} = await supabase
    .from('carretas')
    .select()
    .eq('id', carreta_id);
    if(data){
      //console.log(data);
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
