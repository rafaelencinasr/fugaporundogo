import carretaTarjeta from "../components/carretaTarjeta";
import supabase from "../config/supabaseClient";

async function inicio(){

    const {data, error} = await supabase
    .from('carretas')
    .select()
    if(data){
      console.log(data);
    }
    
    const content = document.querySelector('#content');
    const carretasAbiertas = document.createElement('div');
    carretasAbiertas.id = 'carretasAbiertas';

    const carretasCerradas = document.createElement('div');
    carretasCerradas.id = 'carretasCerradas';

    data.forEach((carreta)=>{
        carretasAbiertas.append(carretaTarjeta(carreta));
    })

    //carretasAbiertas.append(carretaTarjeta(), carretaTarjeta(), carretaTarjeta(), carretaTarjeta(), carretaTarjeta());
    content.append(carretasAbiertas, carretasCerradas);
}

export default inicio;