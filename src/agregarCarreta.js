import './style.css';
import navbar from './components/navbar.js'
import agregarUnaCarreta from './pages/agregarUnaCarreta';
import pageTitle from './components/pageTitle';

navbar();

content.innerHTML = '';
  content.append(pageTitle('Agregar Carreta'));

  agregarUnaCarreta();