import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alerta from "./Alerta";

import { useState } from "react";

function Registro(){
    const [alerta, setAlerta] = useState({mensaje: "", color: ""})
    return(
        <>
        <div className="iconos">
            <SocialButton icon={"fa-brands fa-github fa-2xl"}/>
            <SocialButton icon={"fa-brands fa-facebook fa-2xl"}/>
            <SocialButton icon={"fa-brands fa-linkedin fa-2xl"}/>
        </div>
        <p>o usa tu email para registrarte</p>
        <Formulario setAlerta={setAlerta} />
        <Alerta />
        {alerta.mensaje && <p className="alerta" style={{backgroundColor: alerta.color}}>{alerta.mensaje}</p>}
        </>
        
    )
}

export default Registro;
  