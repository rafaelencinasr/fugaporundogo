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

    //Algoritmo para revisar si la carreta abre hoy o no, se hace un array
    //para carretas abiertas, y otro para cerradas

    const fechaHoy = new Date();
    let diaHoy = fechaHoy.getDay();
    let queHoraEs = fechaHoy.getHours();
    let queMinutoEs = fechaHoy.getMinutes();
    let queSegundoEs = fechaHoy.getSeconds();
    let horaTest = fechaHoy.toLocaleTimeString('en-GB'/*[] , {hour: '2-digit', minute:'2-digit'} */);

    //let horaTest = '02:30';

    let carretasAbiertasArr = [];
    let carretasCerradasArr = [];

    //console.log(fechaHoy);
    //console.log(diaHoy);
    //console.log(`${queHoraEs}:${queMinutoEs}:${queSegundoEs}`);
    //console.log("Hora test: " + horaTest);

    data.forEach((carreta)=>{
      let horarioHoy = carreta.dias_horarios[diaHoy-1];
      let cerradoHoy = horarioHoy.cerrado;
      let horaAbierto = horarioHoy.abre;
      let horaCerrado = horarioHoy.cierra;


      let horarioAyer;

      if(diaHoy >= 2){
        horarioAyer = carreta.dias_horarios[diaHoy-2];
      } else{ //Si hoy es Lunes, el horario de ayer es el del domingo, array[6]
        horarioAyer = carreta.dias_horarios[6]; 
      }

      let cerradoAyer = horarioAyer.cerrado;
      let horaCerradoAyer = horarioAyer.cierra;

      //Revisa si actualmente esta abierta la carreta en los siguientes casos
      // - Caso 1: Hoy si abre, y la hora actual es despues de la hora que abren, pero antes de la hora de cerrada (abre y cierra el mismo dia)
      // - Caso 2: Hoy si abre, y la hora actual es despues de la hora que abren, pero antes de la hora de cerrada (cierra al dia siguiente en la madrugada)
      // - Caso 3: Hoy si abre, pero la hora actual no esta dentro del rango de operacion
      // - Caso 4: Hoy no abre, pero ayer si, y la hora actual es menor al horario de cerrado de ayer.
      // - Caso 5: Hoy no abre, y ayer tampoco.
      if(!cerradoHoy){
        
        // checa hora mayor de horaAbierto y menor de hora cerrada (si hora de cerrad
        // es menor de hora abierto, solo checar horaAbierto)
        if(horaTest>horaAbierto && horaTest<horaCerrado){
           //carreta abierta
           //console.log("Caso 1"); 
           carretasAbiertasArr.push(carreta);
        } else if(horaCerrado<horaAbierto && (horaTest>horaAbierto || horaTest<horaCerrado)){
          //carreta abierta
          //console.log("Caso 2"); 
          carretasAbiertasArr.push(carreta);
        } else{
          //carreta cerrada
          //console.log("Caso 3"); 
          carretasCerradasArr.push(carreta);
        }
      } else if(!cerradoAyer && horaTest<horaCerradoAyer){
        //console.log("Caso 4"); 
        //Si hoy esta cerrado, pero ayer estaba abierto, y la hora actual es menor de horaCerrado de ayer
        carretasAbiertasArr.push(carreta);
      }
      else{
        //console.log("Caso 5"); 
        carretasCerradasArr.push(carreta);
      }
    })

    carretasAbiertasArr.forEach((carretaAbierta)=>{
      carretasAbiertas.append(carretaTarjeta(carretaAbierta, true));
    })

    carretasCerradasArr.forEach((carretaCerrada)=>{
      carretasCerradas.append(carretaTarjeta(carretaCerrada, false));
    })

    //carretasCerradas.append(carretaTarjeta(data[1], false));

    //carretasAbiertas.append(carretaTarjeta(), carretaTarjeta(), carretaTarjeta(), carretaTarjeta(), carretaTarjeta());
    content.append(carretasAbiertas, carretasCerradas);
}

export default inicio;