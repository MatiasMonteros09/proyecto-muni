import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Tareas } from "./components/Tareas"

function App() {

  const [tarea, setTarea] = useState("")
  const [listadoTareas, setListadoTareas] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if(tarea === "") {
      alert("Debes agregar una tarea")
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false, 
    }

    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea("")
  }

  function handleChange(e) {
    setTarea(e.target.value)
  }

  function onActualizarTarea(objEditarTarea) {
    const {id, tarea} = objEditarTarea

    const temp = [...listadoTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea

    setListadoTareas(temp)
  }

  function onBorrarTarea(id) {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }
  
  return (
    <>
      <div className="contenedorPrincipal">
        <h1>Lista de Tareas</h1>
        <div className="contenedorFormulario">
          <Formulario 
            tarea = {tarea}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange} />
        </div>
        <div className="contenedorTareas">
          <h2>Tareas</h2>
          <div className="contenedorInfoTareas">
            {
              listadoTareas.map(tarea => (
                <Tareas 
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  onActualizarTarea={onActualizarTarea}
                  onBorrarTarea={onBorrarTarea} />
              ))
            }
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
