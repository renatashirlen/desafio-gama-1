// import React, { Component } from "react";


// class Form extends Component {
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
//     };
//   }

//   render() {
//     return (
//       <section className="form">
//         <span className="texto">* - Campo Obrigatório</span>
//         <form>
//           <label>
//             Nome Completo:*
//             <input
//               type="fname"
//               placeholder="Nome Completo"
//               autocomplete="on"

//             />
//           </label>
//           <label>
//             Cargo Pretendido:
//             <input type="text" placeholder="Cargo Pretendido" />
//           </label>
//           <label>
//             Data de Nascimento:*
//             <input
//               type="date"
//               name="data"
//               min="1921-01-01"
//               max="2003-01-01"
//               autocomplete="on"
//               required
//             />
//           </label>
//           <label>
//             Gênero:*
//             <input
//               type="date"
//               name="data"
//               min="1921-01-01"
//               max="2003-01-01"
//               autocomplete="on"
//               required
//             />
//           </label>
//           <label>
//             CPF:*
//             <input type="text" placeholder="CPF (apenas números)" />
//           </label>
//           <label>
//             Identidade:*
//             <input type="text" placeholder="(apenas números)" />
//           </label>
//           <label>
//             CEP:*
//             <input type="text" placeholder="CEP" />
//           </label>
//           <label>
//             Endereço:*
//             <input type="text" placeholder="Endereço" />
//           </label>
//           <label>
//             Número:*
//             <input type="text" placeholder="Número" />
//           </label>
//           <label>
//             Cidade:*
//             <input type="text" placeholder="Cidade" />
//           </label>
//           <label>
//             Bairro:*
//             <input type="text" placeholder="Bairro" />
//           </label>
//           <label>
//             Celular:*
//             <input type="tel" placeholder="(apenas números)" />
//           </label>
//           <label>
//             Telefone 1:
//             <input type="tel" placeholder="(apenas números)" />
//           </label>
//           <label>
//             Telefone 2:
//             <input type="tel" placeholder="(apenas números)" />
//           </label>
//           <label>
//             Contato:
//             <input type="text" placeholder="Recados" />
//           </label>
//           <label>
//             Email:*
//             <input type="email" placeholder="email@exemplo.com.br" />
//           </label>
//           <p>Possui veículo?</p>
//             <input type="radio" id="vei_sim" name="veiculo" value="sim" /> {" "}
//           <label for="sim">Sim</label>
//           <br />
//             <input type="radio" id="vei_nao" name="veiculo" value="nao" /> {" "}
//           <label for="nao">Não</label>
//           <br />
//           <input type="submit" value="Enviar" />
//         </form>
//       </section>
//     );
//   }
// }

// export default Form;
