let cervejas = [
    {
      name: "Guiness",
      alcohol: "10%",
      style: "Red Ale",
      ibu: "15",
    },
    {
      name: "Desperados",
      alcohol: "6%",
      style: "English IPA",
      ibu: "16",
    },
    {
      name: "Becks",
      alcohol: "5%",
      style: "Imperial Stout",
      ibu: "17",
    },
  ];
  
  //cs é um array de cervejas
  const carregarDiv = (
    cs,
    id = "cervejasDiv",
    cabecalhos = ["Nome", "Álcool", "Estilo", "Amargor"]
  ) => {
    const div = document.getElementById(id);
  
    const cabecalhosHtml = cabecalhos.map((cab) => `<th>${cab}</th>`);
    const tableHtmlStart = `
          <table>
            <thead>
              <tr>
                ${cabecalhosHtml.join("\n")}
              </tr>
            </thead>
            <tbody>`;
    const tableHtmlEnd = `
            </tbody>
          </table>
        `;
  
    const gerarTableData = (cerveja) => {
      const chaves = Object.keys(cerveja);
      return chaves.map((chave) => `<td>${cerveja[chave]}</td>`).join("\n");
    };
  
    const itensHtml = cs.map((cerv) => {
      return `<tr>${gerarTableData(cerv)}</tr>`;
    });
  
    div.innerHTML = tableHtmlStart + `${itensHtml.join("\n")}` + tableHtmlEnd;
  };
  
  let botao = document.getElementById("botaoCarregar");
  botao.addEventListener("click", () => carregarDiv(cervejas));