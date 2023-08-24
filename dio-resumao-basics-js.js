/* primitivos */

// boolean
console.log("--------------- TIPOS PRIMITIVOS ----------------");
console.log("--------------- boolean ----------------");
let bol = false;
console.log(typeof bol);

// number
console.log("--------------- number ----------------");
let num = 1;
console.log(typeof num);

// string
console.log("--------------- string ----------------");
let nome = "Bob";
console.log(typeof nome);

// undefined/null
console.log("--------------- undefined/null ----------------");
let abc;
console.log(abc);
console.log(typeof abc);

console.log("--------------- TIPOS DE VARIAVEIS ----------------");
//const - deve ter um valor inicial
console.log(
  "--------------- const - não pode ter seu valor reatribuido e deve ter um valor inicial ----------------"
);
const def = 1;
console.log(def);

// let - pode ser inicializada vazia
console.log(
  "--------------- let - pode ter seu valor reatribuido e pode ser inicializada vazia ----------------"
);
let ghi;
console.log(ghi);

console.log("--------------- TIPOS ESCOPOS ----------------");
//escopo global
console.log("--------------- global - acessivel a todos ----------------");
let escopoGlobal = "global";
console.log(escopoGlobal);

//escopo local
console.log(
  "--------------- local - acessivel apenas dentro do bloco, tendo o bloco/função que ser chamado fora  ----------------"
);
function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno);
}
escopoLocal();

console.log("--------------- OPERADORES ----------------");
// atribuição
console.log("--------------- atribuição ----------------");
let atribuicao = "valorAtribuido";

//comparação - não discrimina tipo, apenas valor
console.log(
  "--------------- comparação - não discrimina tipo ----------------"
);
let comparacao = "0" == 0;
console.log(comparacao);

//comparação identica - discrimina tipo e valor
console.log(
  "--------------- comparação identica - discrimina tipo e valor ----------------"
);
let novaComparacao = "0" === 0;
console.log(novaComparacao);

/* Operadores aritmeticos */
console.log("--------------- OPERADORES ARITMÉTICOS----------------");

// adição
console.log("--------------- adição----------------");
let adicao = 2 + 1;
console.log(adicao);

// subtracao
console.log("--------------- subtração----------------");
let subtracao = 2 - 1;
console.log(subtracao);

// multiplicacao
console.log("--------------- multiplicação ----------------");
let multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisao real
console.log("--------------- divisão real ----------------");
let divisaoReal = 6 / 3;
console.log(divisaoReal);

// divisao inteira ou resto
console.log("--------------- divisão inteira ou resto ----------------");
let divisaoInt = 5 % 1;
console.log(divisaoInt);

// potenciacao
console.log("--------------- potenciação----------------");
let potencia = 2 ** 10;
console.log(potencia);

/* Operadores Relacionais */
console.log("--------------- OPERADORES RELACIONAIS ----------------");

// >
console.log("--------------- maior que > ----------------");
let maiorQ = 2 > 10;
console.log(maiorQ);

// <
console.log("--------------- menor que < ----------------");
let menorQ = 2 < 10;
console.log(menorQ);

// >=
console.log("--------------- maior igual a >= ----------------");
let maiorIgual = 2 >= 10;
console.log(maiorIgual);

// <=
console.log("--------------- menor igual a <= ----------------");
let menorIgual = 2 <= 10;
console.log(menorIgual);

/* Operadores Lógicos (boolean)*/
console.log("--------------- OPERADORES LÓGICOS (boolean) ----------------");

// && - todos precisam ser true
console.log("--------------- && - todos precisam ser true ----------------");
let e = true && false;
console.log(e);

// || - pelo menos um precisa ser true
console.log(
  "--------------- || - pelo menos um precisa ser true ----------------"
);
let a = true || false;
console.log(a);

// ! - inverte o valor
console.log("--------------- ! - inverte o valor ----------------");
let g = !true;
console.log(g);

/* Vetores ou arrays - tipo de lista de variavel+valor onde cada variavel possui um indice*/
console.log(
  "--------------- VETORES OU ARRAYS - tipo de lista de variavel+valor onde cada variavel possui um indice ----------------"
);

console.log("--------------- array 1 ----------------");
let array1 = ["string", 1, true];
console.log(array1);

console.log("--------------- array 2 ----------------");
let array2 = [
  "string",
  1,
  true,
  ["arrayA"],
  ["arrayB"],
  ["arrayC"],
  ["arrayD"],
];
console.log(array2);
console.log("--------------- valor de indice 3 do array 2 ----------------");
console.log(array2[3]);

console.log("--------------- METODOS ARRAY ----------------");

// forEach() - itera um array
console.log(
  "--------------- forEach() - itera (repete) um array para cada item, exibindo variavel e indice ----------------"
);
array2.forEach(function (item, i) {
  console.log(item, i);
});
// push() - adc item no final do array
console.log(
  "--------------- push() - adc item no final do array ----------------"
);
array2.push("novo item no final");
console.log(array2);

// pop() - remove item do final do array
console.log(
  "--------------- pop() - remove item do final do array ----------------"
);
array2.pop();
console.log(array2);
// unshift() - adc item no inicio do array
console.log(
  "--------------- unshift() - adc item no inicio do array ----------------"
);
array2.unshift("novo item no inicio");
console.log(array2);
// shift() - remove item do inicio do array
console.log(
  "--------------- shift() - remove item do inicio do array ----------------"
);
array2.shift();
console.log(array2);
// indexOf() - retorna o indice de um valor
console.log(
  "--------------- indexOf() - retorna o indice de um valor ----------------"
);
console.log(
  array2.indexOf(true) + " " + " => " + " " + "indice do valor 'true'"
);
// splice() - remove ou substitui um item pelo indice
console.log(
  "--------------- splice() - remove ou substitui o intervalo indicado ----------------"
);
array2.splice(0, 3);
console.log(array2);
// slice() - retorna uma parte de um array existente
console.log(
  "--------------- slice() - retorna uma parte de um array existente ----------------"
);
let novoArray = array2.slice(0, 3);
console.log(novoArray);

console.log("--------------- OBJETOS - {PROP + VALOR} ----------------");
console.log("--------------- objeto 'xicara' ----------------");
let xicara = {
  cor: "azul",
  tamanho: "P",
};
console.log(xicara);
console.log("--------------- desestruturação de objeto ----------------");
let cor = xicara.cor;
let tamanho = xicara.tamanho;
console.log(cor, tamanho);
console.log("--------------- objeto 'object' ----------------");
let object = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["array"],
  objectInterno: { objectInterno: "objeto Interno" },
};
console.log(object);
console.log(
  "--------------- valor da propriedade 'boolean' do objeto 'object' ----------------"
);
console.log(object.boolean);

console.log(
  "--------------- valor da propriedade 'string' do objeto 'object', mas armazenado em uma nova variavel ----------------"
);
let novaString = object.string;
console.log(novaString);
console.log(
  "--------------- valor da propriedade 'array' do objeto 'object', mas armazenado em uma nova variavel ----------------"
);
let arrayInterno = object.array;
console.log(arrayInterno);

console.log("--------------- desestruturação com chaves {} ----------------");
let { string, number, objectInterno } = object;
console.log(string, number, objectInterno);

console.log("--------------- FUNÇÕES ----------------");

function funcao() {
  console.log(`function funcao() {}
funcao();`);
}
funcao();

console.log("--------------- FUNÇÕES com parâmetros----------------");

function parametro(p1, p2) {
  console.log(p1, p2);
}
console.log(`function parametro(p1, p2) {
    console.log(p1, p2);
}`);
parametro("Parâmetro 1", "Parâmetro 2");

console.log("--------------- TIPOS FUNÇÕES ----------------");

console.log(
  "--------------- declarativas - deve usar a palavra reservada 'function' + nome da função----------------"
);
function nomeDaFuncao() {
  console.log(`function nomeDaFuncao() {}
nomeDaFuncao();`);
}
nomeDaFuncao();
console.log(
  "--------------- expressões de funções - nomeação opcional; função atribuida a expressões (i.e. atribuida a uma váriavel)----------------"
);
const funcaoExpNome = function funcaoExpNome() {
  console.log(
    `const funcaoExpNome = function funcaoExpNome() {};
funcaoExpNome();`
  );
};
funcaoExpNome();

const funcaoExpSemNome = function () {
  console.log(
    `const funcaoExpSemNome = function () {};
funcaoExpSemNome();`
  );
};
funcaoExpSemNome();
console.log(
  "--------------- arrow function - sempre anonimas (não podem ser nomeadas), de sintaxe curta (let funcao = () => {})----------------"
);
const funcaoArrow = () => {
  console.log(`const funcaoArrow = () => {};
funcaoArrow();`);
};
funcaoArrow();

console.log("--------------- Exercício - funções aritméticas ----------------");

console.log(`Métodos utilizados:
Number() - converte valor em números;
Prompt() - registra input de usuário;
Alert() - mostra mensgaem ao usuário;
Template Strings - permite utilizar string junto de funções`);

function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"
    )
  );
  console.log(operacao);

  if (!operacao || operacao >= 7) {
    alert("Erro - operação inválida");
  } else {
    let n1 = Number(prompt("Insira o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;

    if (!n1 || !n2) {
      alert("Erro - numeros inválidos");
      calculadora();
    } else {
      function somaOp() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
      function subtracaoOp() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacaoOp() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoRealOp() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoInteiraOp() {
        resultado = n1 % n2;
        alert(`O resta da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }
      function potenciacaoOp() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt("Deseja fazer outra operação ?\n 1 - Sim\n 2 - Não");

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais!");
        } else {
          alert("Digite uma opção válida");
          novaOperacao();
        }
      }
    }

    //   if (operacao == 1) {
    //     somaOp();
    //   } else if (operacao == 2) {
    //     subtracaoOp();
    //   } else if (operacao == 3) {
    //     multiplicacaoOp();
    //   } else if (operacao == 4) {
    //     divisaoRealOp();
    //   } else if (operacao == 5) {
    //     divisaoInteiraOp();
    //   } else if (operacao == 6) {
    //     potenciacaoOp();
    //   }

    switch (operacao) {
      case 1:
        somaOp();
        break;
      case 2:
        subtracaoOp();
        break;
      case 3:
        multiplicacaoOp();
        break;
      case 4:
        divisaoRealOp();
        break;
      case 5:
        divisaoInteiraOp();
        break;
      case 6:
        potenciacaoOp();
        break;
    }
  }
}

calculadora();
