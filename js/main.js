const btn = document.querySelector(".enviar-formulario");
const formulario = document.querySelector(".formulario");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputName = document.querySelector("#name");
  const valueInput = inputName.value;
  axios("pessoas.json").then((resposta) =>
    loadElements(resposta.data, valueInput)
  );
  console.log(valueInput);
});

function loadElements(json, nome) {
  const resultSearch = document.createElement("div");
  const nomeEnviado = nome;

  if (json.find((pessoa) => pessoa.nome === nome)) {
    console.log("foi");
    let p = document.createElement("p");
    p.classList.add("sucessText");
    p.innerHTML = `${nome} foi encontrado no banco de dados`;
    resultSearch.appendChild(p);
    for (let sucessText of this.document.querySelectorAll(".sucessText")) {
      sucessText.remove();
    }
  } else {
    alert("Nome não encontrado no banco de dados");
    formulario.submit();
  }

  const result = document.querySelector(".resultado");
  result.appendChild(resultSearch);
}
