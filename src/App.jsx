import { useState } from 'react'
import './App.css'


export const App = () => {

  const [tareas, setTareas] = useState('')
  const [listaTareas, setlistaTareas] = useState([])

  const agregarTarea = () => {
    if (tareas.trim() !== '') {
      setlistaTareas([...listaTareas, tareas])
      setTareas('');
    }else {
      alert('Debe de ingresar una tarea')
    }
  };
const actualizarTarea = (index) => {
  const nuevaTarea = prompt('Ingrese la tarea actualizada:');
  if (nuevaTarea !== null && nuevaTarea.trim() !== '') {
    const nuevaLista = [...listaTareas];
    nuevaLista[index] = nuevaTarea;
    setlistaTareas(nuevaLista);
  }
};

  const eliminarTarea = (index) => {
    const nuevaLista = listaTareas.filter((_, i) => i !== index);
    setlistaTareas(nuevaLista);
  }

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
              <button onClick={() => eliminarTarea(index)} className='eliminar'>E</button>
              <button onClick={() => actualizarTarea(index)} className='actualizar'>A</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
