// export default function HistorialCocina() {
//     return (
//         <div>
//             <h1>historial</h1>
//             <p>(っ＾▿＾)٩(˘◡˘ )</p>
//         </div>
//     )
// }
export default function HistorialCocina() {
    return (
        <div className="cocina-historial">
                    {/* cuadro de arriba*/}
            <div className="up-box-historialCocina">
                <div className="up-box-historialCocina__pedidos">
                    <h1 className="up-box-historialCocina__time"> Time</h1>
                    <div className="cocina-historial__horizontal">
                        <p> Mesera: Carla </p>
                    </div>
                </div>
            </div>
            

        {/* cuadro de abajo*/}

            <div className="down-box-historialCocina">
                <div className="cocina-historial__horizontalDown">
                <h1 className="down-box-historialCocinas__time"> Time</h1>
                    <p> Mesera: Carla </p>
                </div>
            </div>
        </div>
    )
}