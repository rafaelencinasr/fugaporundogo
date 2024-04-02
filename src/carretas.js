import './style.css';
import supabase from "./config/supabaseClient";


let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el ID del producto que queremos mostrar
let carreta_id = params.get("id"); // Se extrae especificamente el valor de id=
console.log("id= " + carreta_id);

const {data, error} = await supabase
    .from('carretas')
    .select()
    .eq('id', carreta_id);
    if(data){
      console.log(data);
    }


const content = document.querySelector('#content');
content.textContent = "Test webpack desde carretas";
