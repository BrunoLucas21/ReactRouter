import { Navigate } from "react-router-dom";

function Login() {
    const handleLogar = () => {
        console.log('Usuário logado!');
        return Navigate("/login")
    }

  return (
    <div>
        <h2>Preencher o formulário</h2>
        <form action="/login" method="post">
            <input type="text" name="nome" placeholder="Digite seu nome" /> <br/>
            <input type="email" name="email" placeholder="Digite seu email" /> <br/>
            <input type="text" name="endereco" placeholder="Digite seu endereco" /> <br/>
            <input type="number" name="number" placeholder="Digite seu numero" /> <br/>
            <input type="tel" name="fone" placeholder="Digite seu telefone" /> <br/>
            <input type="password" name="password" placeholder="Digite sua senha" /> <br/>
            <button onClick={handleLogar}>Enviar</button>
        </form>
    </div>
  )
}

export default Login