let area = prompt("Você quer seguir para a área de Front-End ou Back-End? Responda com 'Front-End' ou 'Back-End'.");

if (area === "Front-End") {
  let tecnologiaFront = prompt("Você quer aprender React ou Vue?");
  alert(`Ótima escolha! Aprender ${tecnologiaFront} vai abrir muitas portas na área de Front-End.`);
} else if (area === "Back-End") {

    let tecnologiaBack = prompt("Você quer aprender C# ou Java?");
  alert(`Ótima escolha! Aprender ${tecnologiaBack} é essencial para trabalhar na área de Back-End.`);
} else {
  alert("Você não inseriu uma área válida. Tente novamente.");
}

let caminho = prompt(
  "Você deseja se especializar na área escolhida ou se tornar Fullstack? Responda com 'Especializar' ou 'Fullstack'."
);

if (caminho === "Especializar") {
  alert("Continue se aprofundando na área escolhida! O foco é fundamental para o sucesso.");
} else if (caminho === "Fullstack") {
  alert("Expandir seus conhecimentos para se tornar Fullstack é uma excelente escolha!");
} else {
  alert("Opção inválida. Mas não desista de aprender e crescer!");
}

let maisTecnologias = true;
while (maisTecnologias) {
  let tecnologia = prompt("Tem alguma tecnologia que você gostaria de aprender?");
  alert(`Que legal! Aprender ${tecnologia} vai ser muito interessante e útil para sua carreira.`);
  
  let continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda com 'ok' para continuar ou qualquer outra coisa para sair.");
  if (continuar.toLowerCase() !== "ok") {
    maisTecnologias = false;
  }
}

alert("Parabéns por explorar suas opções na área de programação! Continue aprendendo e evoluindo!");
