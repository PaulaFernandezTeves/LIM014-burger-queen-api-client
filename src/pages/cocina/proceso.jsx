export default function Status() {
    return (
        <div className="page-process">
            {/* cuadro de arriba*/}
            <div className="process-box"> 
                <div className="process-box__kitchen">
                     <h1 className="box-kitchen"> Time</h1>
                    <div className="box-kitchen__order">
                        <button className="btn-order-inicio">Inicio</button>
                        <button className="btn-order-listo">Listo</button>
                    </div>
                    <div className="process-historial__horizontal">
                        <p> Mesera: Carla </p>
                    </div>
                </div>
            </div>

             {/* cuadro de abajo*/}
             <div className="down-process-box"> 
                <div className="down-process-box__kitchen">
                     <h1 className="down-box__kitchen"> Time</h1>
                    <div className="down-box-kitchen__order">
                        <button className="down-btn-order-inicio">Inicio</button>
                        <button className="down-btn-order-listo">Listo</button>
                    </div>
                    <div className="down-process-historial__horizontal">
                        <p> Mesera: Carla </p>
                    </div>
                </div>
            </div>           
        </div>
    )
}