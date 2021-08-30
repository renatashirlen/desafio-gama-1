import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Form from "./Form/Form";
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from 'react';


const App = () => {

  const fetchAddress = async () => {
    const endereco = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, logradouro: endereco.data.logradouro });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:3300/register', form);
      if (user.status === 200) {
        alert('Cadastro realizado com sucesso');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    nome: "",
    cargo: "",
    dataNascimento: "",
    sexo: "",
    estadoCivil: "",
    cep: "",
    endereco: "",
    numero: "",
    cidade: "",
    bairro: "",
    fone1: "",
    fone2: "",
    celular: "",
    contato: "",
    email: "",
    identidade: "",
    cpf: "",
    veiculo: "",
    habilitacao: "",
  });

  const [cpfError, setCpfError] = useState(false);

   return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">JOBSNet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Vagas">Vagas</Nav.Link>
            <Nav.Link href="#Sobre">Sobre</Nav.Link>
          </Nav>
          <Navbar.Text><strong>Banco de Currículos</strong></Navbar.Text>
        </Container>
      </Navbar>
     <br />
     
     <Form />
      
    </div>
  );
}

export default App;