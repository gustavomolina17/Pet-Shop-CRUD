const http = new XMLHttpRequest(); // Objeto que fornece alguns métodos para fazer a comunicação entre a aplicação e a API

http.open("GET", "http://localhost:3000/profile"); //abre a comunicação entre a minha aplicação e a API.

http.send();

http.onload = () => {
  const data = http.response;
  console.log(data);
};
