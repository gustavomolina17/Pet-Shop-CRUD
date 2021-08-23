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

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest(); // Objeto que fornece alguns métodos para fazer a comunicação entre a aplicação e a API

    http.open("GET", "http://localhost:3000/profile"); //abre a comunicação entre a minha aplicação e a API.

    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response));
      } else {
        resolve(JSON.parse(http.response));
      }
    };
    http.send();
  });
  console.log(promise); // para exibir o que está dentro da promise
  return promise;
};

listaClientes() // Chamando a função para ser executada
  .then((data) => {
    // Já sabe automaticamente que estou me referindo a função listaClientes
    data.forEach((elemento) => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
    });
  });
