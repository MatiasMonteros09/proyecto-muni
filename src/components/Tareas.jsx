import { useState } from "react";

export function Tareas(props) {
    const {tarea, onActualizarTarea, onBorrarTarea} = props
    const [editando, setEditando] = useState(false)
    const [estaCompletada, setEstaCompletada] = useState(false)

    function EdicionActivada() {
        const [valor, setValor] = useState(tarea.tarea)

        function handleChange(e) {
            const text = e.target.value 
            setValor(text)
        }

        function handleClick(e) {
            e.preventDefault()

            onActualizarTarea(
                {
                    id: tarea.id,
                    tarea: valor,
                    completado: false
                }
            )
            setEditando(false)
        }

        return(
            <>
                <input
                    type="text"
                    onChange={handleChange}
                    value={valor} />

                <button className="btn"
                onClick={handleClick}>
                    Guardar
                </button>

                <button className="btn btnBorrar"
                onClick={() => onBorrarTarea(tarea.id)}>
                    Borrar
                </button>
            </>
        );
    }

    function EdicionDesactivada() {
        return(
            <>
                <input type="checkbox" checked = {estaCompletada}
                onClick={() => setEstaCompletada(!estaCompletada)}>
                </input>
                <span className={estaCompletada ? "listaDeTarea spanSubrayado" : "todoTarea"}>
                    {tarea.tarea}
                </span>

                <button className="btn btnEditar"
                onClick={() => setEditando(true)}>
                    Editar
                </button>

                <button className="btn btnBorrar" 
                onClick={() => onBorrarTarea(tarea.id)}>
                    Borrar
                </button>
            </>
        );
    }
    return(
        <>
            <div className="contenedorTarea" id={tarea.id}>
                {
                    editando
                    ? <EdicionActivada />
                    : <EdicionDesactivada />
                }
            </div>
        </>
    );
}