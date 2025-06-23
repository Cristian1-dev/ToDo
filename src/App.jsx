import { Titulo } from './componentes/Titulo.jsx';
import { Tarea } from './componentes/Tarea.jsx';
import { Input } from './componentes/Input.jsx';

import './App.css'

export const App = () => {
  return (
    <div className="contenedor-Tareas">
      <Titulo titulo = "Lista de Tareas" />
      <Input />
      <Tarea />
      <Tarea />
      
    </div>
  )
}
