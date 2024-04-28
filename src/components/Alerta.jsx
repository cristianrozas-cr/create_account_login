import { useState } from "react";

function Alerta(){
    const [alerta, setAlerta] = useState({mensaje: "", color: ""})
    return(
        <>
        {alerta.mensaje && <h3 style={{color: alerta.color}}>{alerta.mensaje}</h3>}
        </>
        
    )
}

export default Alerta;
  