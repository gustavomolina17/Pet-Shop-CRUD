const criaNovaLinha = (nome, email) => {
  const linhaNovoCliente = document.createElement("tr");

  const conteudo = `
<td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>`;
  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

//Fetch: é um método global da interface da fetch API. Por padrão a fetch já faz um get e devolve uma promise.

const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json(); // por padrão a resposta é um texto e precisamos de um objeto Js válido.
  });
};

listaClientes() // Chamando a função para ser executada
  .then((data) => {
    // Já sabe automaticamente que estou me referindo a função listaClientes
    data.forEach((elemento) => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
    });
  });
