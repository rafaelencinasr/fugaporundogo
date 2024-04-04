import './style.css';
import './carretas.css';
import supabase from "./config/supabaseClient";
import navbar from './components/navbar';
import pageTitle from './components/pageTitle';
navbar();

const content = document.querySelector('#content');
content.append(pageTitle('Busqueda'));

const {data, error} = await supabase
    .from('carretas')
    .select()
    if(data){
      console.log(data);
    };
