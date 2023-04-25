import "./Auth.css"

//components
import { Link } from 'react-router-dom'

//Hooks
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// redux
import { register, reset } from "../../slices/authSlice"

const Register = () => {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)

    dispatch(register(user))
  }
  //Clean all authStates
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" onChange={(e) => setname(e.target.value)} value={name || ""} />
        <input type="email" placeholder="E-mail" onChange={(e) => setemail(e.target.value)} value={email || ""} />
        <input type="password" placeholder="senha" onChange={(e) => setpassword(e.target.value)} value={password || ""} />
        <input type="password" placeholder="Confirme a senha" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword || ""} />
        <input type="submit" value='cadastrar' />
      </form>
      <p>
        ja tem conta? <Link to='/login'>Clique aqui</Link>
      </p>
    </div>
  )
}

export default Register