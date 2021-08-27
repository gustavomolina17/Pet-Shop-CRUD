import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `;
  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;
  // criação de um data attributes para que cada linha da tabela receba um id, ou seja o id do cliente passa a ser uma propriedade.
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

tabela.addEventListener("click", (evento) => {
  let ehBotaoDeletar =
    evento.target.className === "botao-simples botao-simples--excluir";

  if (ehBotaoDeletar) {
    const linhaCliente = evento.target.closest("[data-id]"); //elemento pai mais próximo da minha td, que é a td que tem o botão. O elemento pai mais próximo da td é a linha que criamos, a tr.

    let id = linhaCliente.dataset.id;
    clienteService.removeCliente(id).then(() => {
      linhaCliente.remove();
    });
  }
});

clienteService.listaClientes().then((data) => {
  data.forEach((elemento) => {
    tabela.appendChild(
      criaNovaLinha(elemento.nome, elemento.email, elemento.id)
    );
  });
});
