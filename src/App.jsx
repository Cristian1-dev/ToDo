import { useState } from 'react'
import './App.css'


export const App = () => {

  const [tareas, setTareas] = useState('')
  const [listaTareas, setlistaTareas] = useState([])

  const agregarTarea = () => {
    if (tareas.trim() !== '') {
      setlistaTareas([...listaTareas, tareas])
      setTareas('');
    };
  };

  return (
    <div className='contenedor'>
      <h1>Lista de Tareas</h1>
      <div className="entrada">
        <input type="text" placeholder='Agrege una tarea' value={tareas} onChange={(e) => setTareas(e.target.value)} />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <div className='lista'>
        {listaTareas.map((tarea, index) => (
          <div className='tarea-contenedor' key={index}>
            <div className='parrafo'>{tarea}</div>
            <div className='botones'>
              <button className='eliminar'>E</button>
              <button className='actualizar'>A</button>
            </div>
          </div>
        ))}
      </div>


    </div>
  )

}
