# Jogo Interativo de Escolhas na Programação

Este projeto é um jogo interativo, desenvolvido em **JavaScript**, que permite ao usuário explorar diferentes caminhos e escolhas relacionadas à carreira de programação. O jogo utiliza estruturas de controle de fluxo e loops para criar uma experiência dinâmica e personalizada.

## Funcionalidades

1. **Escolha de Carreira**:
   - O usuário pode optar por seguir na área de **Front-End** ou **Back-End**.

2. **Escolha de Tecnologias**:
   - Para **Front-End**, o jogador escolhe entre **React** ou **Vue**.
   - Para **Back-End**, o jogador escolhe entre **C#** ou **Java**.

3. **Escolha de Caminho**:
   - O jogador decide entre se especializar na área escolhida ou expandir conhecimentos para se tornar **Fullstack**.

4. **Exploração de Novas Tecnologias**:
   - O usuário pode listar quantas tecnologias quiser, com a possibilidade de continuar adicionando até que decida parar.

## Tecnologias Utilizadas

- **JavaScript**: Lógica principal do jogo.
- **Prompt e Alert**: Para interação com o usuário.
- **Estruturas de Controle de Fluxo**:
  - `if`, `else`, `while` para tomar decisões e criar loops.

## Como Jogar

### Rodar no Console do Navegador

1. Abra o console do navegador (Ctrl+Shift+I no Chrome).
2. Copie e cole o código do arquivo **script.js** no console.

Explicação do código: 

   ```javascript
   // Passo 1: Escolher entre Front-End ou Back-End
   let area = prompt("Você quer seguir para a área de Front-End ou Back-End? Responda com 'Front-End' ou 'Back-End'.");

   if (area === "Front-End") {
     // Passo 2: Escolher entre React ou Vue
     let tecnologiaFront = prompt("Você quer aprender React ou Vue?");
     alert(`Ótima escolha! Aprender ${tecnologiaFront} vai abrir muitas portas na área de Front-End.`);
   } else if (area === "Back-End") {
     // Passo 2: Escolher entre C# ou Java
     let tecnologiaBack = prompt("Você quer aprender C# ou Java?");
     alert(`Ótima escolha! Aprender ${tecnologiaBack} é essencial para trabalhar na área de Back-End.`);
   } else {
     alert("Você não inseriu uma área válida. Tente novamente.");
   }

   // Passo 3: Escolher entre especialização ou Fullstack
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

   // Passo 4: Perguntar sobre outras tecnologias
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
