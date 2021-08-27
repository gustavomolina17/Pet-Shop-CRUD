//

// json-server --watch db.json

// Fetch --> é um metodo global da interface da fetch API. Por padrão o fetch já faz o get e devolve uma promise

// Objeto que vai receber listaClientes

const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then(resposta => {
    return resposta.json()
  });
};

export const clienteService = {
  listaClientes,
};
