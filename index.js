const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "v",
        "var",
        "variavel",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "' Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para indicar que duas variáveis são iguais em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseInt()",
        "stringToNumber()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "loop (i = 0; i < 5; i++)",
        "for (i = 0; i <= 5; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'push()' em um array em JavaScript?",
      respostas: [
        "Remover o último elemento do array",
        "Adicionar um elemento ao início do array",
        "Adicionar um elemento ao final do array",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: [
        "!",
        "-",
        "~",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
  
            corretas.delete(item)
            if(estaCorreta) {
              corretas.add(item)
            }
  
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
        
        
        quizItem.querySelector('dl').appendChild(dt)     
    }
  
  
    quizItem.querySelector('dl dt').remove()
    
    
    //coloca as perguntas na tela
    quiz.appendChild(quizItem)
  }