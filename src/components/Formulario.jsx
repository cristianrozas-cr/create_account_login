
import {useState} from 'react'
import Button from 'react-bootstrap/Button';


function Formulario({setAlerta}){
    const [user, setUser] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmarPassword, setConfirmarPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if (user === "" || mail === "" || password === "" || confirmarPassword === ""){
            setAlerta({mensaje: "Debes completar todos los campos", color: "red"})
            return
        }
        if(password !== confirmarPassword){
            setAlerta({mensaje: "Las contraseñas deben coincidir", color: "red"})
            return
        } else{
            setAlerta({mensaje: "Bienvenido", color: "green"})
            setUser("")
            setMail("")
            setPassword("")
            setConfirmarPassword("")
        }
        console.log({user, mail, password, confirmarPassword})
    }
    return(

    <>
    <form onSubmit={handleSubmit} className="formulario">
        <input className='input' type="text" placeholder="Nombre" value={user} onChange={(e) => setUser(e.target.value)}/>
        <input className='input' type="email" placeholder="tuemail@ejemplo.com" value={mail} onChange={(e) => setMail(e.target.value)}/>
        <input className='input' type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input className='input' type="password" placeholder="Confirma tu contraseña" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)}/>
        <Button type="submit" variant="success">Registrarse</Button>
    </form>
    </>
    )
}

export default Formulario;
  