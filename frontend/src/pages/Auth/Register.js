import "./Auth.css"

//components
import {Link} from 'react-router-dom'

//Hooks
import { useState, useEffect } from "react"

const Register = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="senha" />
      <input type="password" placeholder="Confirme a senha" />
      <input type="submit" value='cadastrar'/>
      </form>
      <p>
        ja tem conta? <Link to='/login'>Clique aqui</Link>
      </p>
    </div>
  )
}

export default Register