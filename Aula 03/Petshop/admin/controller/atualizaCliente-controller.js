import { clienteService } from "../service/cliente-service.js";

const pegaURL = new URL(window.location);
console.log(pegaURL);
const id = pegaURL.searchParams.get("id");
console.log(id);

const inputnome = document.querySelector("[data-nome]");
const inputemail = document.querySelector("[data-email]");

clienteService.detalhaCliente(id).then((dados) => {
  inputnome.value = dados.nome;
  inputemail.value = dados.email;
});
