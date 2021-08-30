import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

//Validação do Formulário
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: "",
//       cargo: "",
//       dataNascimento: "",
//       sexo: "",
//       estadoCivil: "",
//       cep: "",
//       endereco: "",
//       numero: "",
//       cidade: "",
//       bairro: "",
//       fone1: "",
//       fone2: "",
//       celular: "",
//       contato: "",
//       email: "",
//       identidade: "",
//       cpf: "",
//       veiculo: "",
//       habilitacao: "",
//       formErrors: { email: "", password: "" },
//       emailValid: false,
//       passwordValid: false,
//       formValid: false,
//     };
//   }

  //Formulário
class Form extends Component {
  render() {
    return (
      <Container>
        <Form className="FormData">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="candidateName" className="nome">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="name"
                onChange={""}
                required
                placeholder="Nome"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="candidateEmail" className="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="nome@email.com.br"
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="candidateGender" className="genero">
              <Form.Label>Gênero</Form.Label>
              <Form.Select required defaultValue="Escolha uma opção">
                <option style={{ display: "none" }}>Escolha uma opção</option>
                <option>Mulher Cis</option>
                <option>Mulher Trans</option>
                <option>Homem Cis</option>
                <option>Homem Trans</option>
                <option>Não-Binário</option>
                <option>Prefiro não responder</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col xs={7}>
              <Form.Group controlId="candidateAddress" className="endereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control placeholder="Endereço" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="candidateZip" className="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="candidateAddress2" className="complemento">
                <Form.Label>Complemento</Form.Label>
                <Form.Control placeholder="Apartamento, Casa, etc..." />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="candidateNei" className="bairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control placeholder="Bairro" />
            </Form.Group>
            <Form.Group as={Col} controlId="candidateCity" className="cidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control required />
            </Form.Group>

            <Form.Group as={Col} controlId="candidateState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Escolha uma opção">
                <option style={{ display: "none" }}>Escolha uma opção</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
              <Col>
            <Form.Group controlId="candidateCel">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{2}"
                onChange={""}
                required={"required"}
                placeholder="Celular com DDD - Apenas números"
              />
            </Form.Group>
            </Col>
            

            <Col>
            <Form.Group controlId="candidateTel1">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                onChange={""}
                required
                placeholder="Telefone - Apenas números"
              />
            </Form.Group>
            </Col>

          </Row>

          <p>Possui veículo?</p>
          <Form.Group as={Col}>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Sim"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Não"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>

          <p>Possui habilitação?</p>
          <Form.Group as={Col}>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Sim"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Não"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>

          
        </Form>
      </Container>
    );
  }
}

export default Form;