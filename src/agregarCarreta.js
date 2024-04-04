import './style.css';

import agregarUnaCarreta from './pages/agregarUnaCarreta';
import pageTitle from './components/pageTitle';

content.innerHTML = '';
  content.append(pageTitle('Agregar Carreta'));

  agregarUnaCarreta();