import { useState } from 'react'

export function App() {
  const [email, setEmail] = useState('')
  const [getEmail, setGetEmail] = useState([])

  function getEmailInfo() {
    var email = document.getElementById('email').value
    setEmail(email)

    fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=<<key>>&email=${email}`
    )
      .then(response => response.json())
      .then(date => setGetEmail(date.is_valid_format.text))
  }

  return (
    <div>
      <h1 className="">Consulta de E-mail</h1>
      <div className="">
        <label>E-mail: </label>
        <input
          placeholder="Informe um e-mail..."
          type="text"
          id="email"
          onChange={getEmailInfo.value}
        />
        <div>
          <button onClick={getEmailInfo}>Consultar</button>
        </div>
        <div>
          <h1>E-mail informado é: {getEmail}</h1>
        </div>
      </div>
    </div>
  )
}
