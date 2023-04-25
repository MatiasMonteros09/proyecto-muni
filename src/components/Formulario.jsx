export function Formulario(props) {

    const {tarea, handleSubmit, handleChange} = props
    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Introduce una tarea"
            onChange={handleChange}
            value={tarea}
            />
        <input 
            type="submit"
            className="btn"
            value="agregar"
            onClick={handleSubmit}
            />
    </form>
    );
}