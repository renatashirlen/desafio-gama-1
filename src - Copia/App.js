import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Form from "./Form/Form";
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from "axios";


const App = () => {

  const createCandidate = async (candidate) => {
    const user = await axios.post('http://localhost:3300', Form);
    if (user.status === 200) {
        alert('Usuário criado com sucesso!');
    }
    alert('Algo deu errado. Por favor, verifique os dados tente novamente.');
};

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