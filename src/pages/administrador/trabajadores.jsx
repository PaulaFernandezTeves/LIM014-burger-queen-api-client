export default function Trabajadores() {
    return (

        <div>
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input 
                nombre="nombre" 
                type="text" 
                placeholder="Categoría">
                </input>
                <label htmlFor="nombre">Usuario</label>
                <input 
                nombre="nombre" 
                type="text" 
                placeholder="ID">
                </input>
                <label htmlFor="nombre">Funciones</label>
                <input 
                nombre="nombre" 
                type="text" 
                placeholder="Rol">
                </input>
            <h1>Lista de trabajadores</h1> <br></br>
            <button>Añadir</button>
            </form>
        </div>
    )
}