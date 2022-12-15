

let bebidas = ["Cachaça", "Vodka", "Cervejas"]

const carregarDiv = (bbda) => {
  const div = document.getElementById("meu amor");
  const bbdaHtml = bbda.map((item) => `<tr><td>${item}</td></tr>`);
  div.innerHTML = `<table>${bbdaHtml.join("\n")}</table>`;

  const btnOrdenar = document.getElementById("btnOrdenar");
  btnOrdenar.style.display = "inline-block";

  const btnEmbaralhar = document.getElementById("btnEmbaralhar");
  btnEmbaralhar.style.display = "inline-block";

  const botaoCarregar = document.getElementById("botaoCarregar");
  botaoCarregar.style.display = "none";
};

const ordenar = (bebidas) => {
    bebidas.sort();
  carregarDiv(bebidas);
};

const embaralhar = (bebidas) => {
    bebidas = bebidas
    .map((bebidas) => ({ bebidas, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.bebidas);
  carregarDiv(bebidas);
};

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarDiv(bebidas));

const btnOrdenar = document.getElementById("btnOrdenar");
btnOrdenar.addEventListener("click", () => ordenar(bebidas));

const btnEmbaralhar = document.getElementById("btnEmbaralhar");
btnEmbaralhar.addEventListener("click", () => embaralhar(bebidas));