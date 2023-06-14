function verificarPrimo(numero) {
    // Verifica se o número é menor que 2, que não pode ser primo
    if (numero < 2) {
      return false;
    }
    
    // Verifica os números de 2 até a raiz quadrada do número
    // Verifica se o número é divisível por algum desses números
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        // Se o número for divisível por outro número, não é primo
        return false;
      }
    }
    
    // Se o número não for divisível por nenhum outro número, é primo
    return true;
  }
  
  function listarNumerosPrimos() {
    const numerosPrimos = [];
    
    // Percorre os números de 1 a 1000
    for (let i = 1; i <= 1000; i++) {
      if (verificarPrimo(i)) {
        // Se o número for primo, adiciona à lista de números primos
        numerosPrimos.push(i);
      }
    }
    
    // Retorna a lista de números primos encontrados
    return numerosPrimos;
  }
  
  // Imprime a lista de números primos de 1 a 1000
  console.log(listarNumerosPrimos());


 ///////////////////////////////////////////////////////


// Função para verificar se uma senha atende aos critérios
function verificarSenha(senha) {
    // Expressão regular para verificar letra maiúscula
    const regexLetraMaiuscula = /[A-Z]/;
    // Expressão regular para verificar letra minúscula
    const regexLetraMinuscula = /[a-z]/;
    // Expressão regular para verificar número
    const regexNumero = /[0-9]/;
    
    // Verifica se a senha atende aos critérios
    return senha.length >= 8 &&
           regexLetraMaiuscula.test(senha) &&
           regexLetraMinuscula.test(senha) &&
           regexNumero.test(senha);
  }
  
  // Senha a ser verificada
  const senha = "Ulisses123";
  
  // Verifica se a senha é válida e exibe uma mensagem correspondente
  if (verificarSenha(senha)) {
    console.log("Senha válida");
  } else {
    console.log("Senha inválida");
  }
  

  ////////////////////////////////////////////////


  // Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1; // O fatorial de 0 e 1 é sempre 1
    }
    
    let fatorial = 1; // Inicializa o fatorial como 1
    
    // Loop para calcular o fatorial do número fornecido
    for (let i = 2; i <= numero; i++) {
      fatorial *= i; // Multiplica o fatorial pelo número atual do loop
    }
    
    return fatorial; // Retorna o resultado do fatorial
  }
  
  // Loop para calcular e exibir os fatoriais de 1 a 10
  for (let i = 1; i <= 10; i++) {
    console.log(`Fatorial de ${i}: ${calcularFatorial(i)}`);
  }

  
  ////////////////////////////////////////////////////////


  // Função que verifica se um número é um quadrado perfeito
function verificarQuadradoPerfeito(numero) {
    const raizQuadrada = Math.sqrt(numero); // Calcula a raiz quadrada do número
    
    return Number.isInteger(raizQuadrada); // Verifica se a raiz quadrada é um número inteiro
  }
  
  const numero = 25; // Número a ser verificado
  if (verificarQuadradoPerfeito(numero)) {
    console.log("É um quadrado perfeito"); // Se o número for um quadrado perfeito, exibe essa mensagem
  } else {
    console.log("Não é um quadrado perfeito"); // Se o número não for um quadrado perfeito, exibe essa mensagem
  }
  