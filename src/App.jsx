import { useState, useEffect } from 'react'
import "./index.css"
import './App.css'


import io from "socket.io-client"

const socket = io("http://localhost:3000", {
  auth: {
    nombre: "David"
  }
})



function App() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(message)
    setMessage("");
    socket.emit("handleMessage", message)
  }

  const joinServer = ()=>{

   

  }

  const mensajeRoom = ()=>{
   
  }

  useEffect(()=>{
    

    
  },[])

  

  return (
    <>

    



    <h1 style={{textAlign: "center"}}>Servidor...</h1>

    <section id="section-server">
      <button>Crear servidor</button>
      <input type="text" placeholder='introduce la sala'/>
      <button onClick={joinServer}>Unirse al servidor</button>
      <button onClick={mensajeRoom}>Mensaje para la room</button>
    </section>

    </>
  )
}

export default App
