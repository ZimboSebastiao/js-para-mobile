# JavaScript para Mobile


 Revisão e recursos novos de JS para Mobile

 ## Principais tópicos de atenção e estudos

 ### Variáveis e Constantes

 `let` e `const` possuem esco de **BLOCO** quando declarado dentro de blocos (condicionais, loops), e escopo **GLOBAL** quando declarado fora de blocos

 `var` possui escopo **GLOBAL** mesmo quando declarado dentro de blocos. Portanto, é acessíveç em praticamente qualquer lugar dentro da aplicação.

 `const` obrigatoriamente precisa ser inicializada com algum valor/expressão, e este valor/expressão **não pode ser modificado**.

 ---

 Bloco de código reaproveitáveis que podem ser criados de pelo menos 3 formas:

 - Função nomeada/declarada
 - Função anônima
 - Arrow Function

 Nas bibliotecas e frameworks as sintaxes mais comuns são Arrow function e Nomeadas.

 **OBS:** Caso utilize as sintaxes anônimas ou arrow, certifique-se de **primeiro** declarar a função para só depois chamá-la.

### Template Literal/String

Forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de forma mais fácil executar operações dentro de string/códigos. Lembre-se do uso das **crases** e do bloco `${}` para execuções de código dinâmico (variáveis, constantes, funções, condicionais e etc).

### Módulos

São uma maneira de separar lógicas/funcionalidades/dados em arquivos dedicados. Ao criar módulos, é necessário utilizar os comandos `export` (no módulo a ser exportado) e `import` (no arquivo em que você quer usar o módulo).

Ao exportar apenas **um recurso**, utiliza-se `export default nomeDoRecurso`. Ao exportar **um ou mais** recursos, utiliza-se `export {recurso1, recurso2, recursoN}`.


Ao importar apenas **um recurso**, utiliza-se `import nomeDoRecurso from "local/nomeDoModulo"`. A importar **um ou mais** recursos, utiliza-se `import {recurso1, recurso2, recursoN} from "local/nomeDoModulo"`.

### Operadores spread e rest ...

- spread (espalhar): usado para dividir elementos de um array ou propriedades de um objeto para um outro array/objeto. Útil para gerar novas estruturas de dados a partir de estruturas existentes.

- rest (coletar/extrair valores): usado para gerar uma lista de parêmetros para uma função à partir dos valores de um array. Útil para evitar necessidade de criar parâmetros manualmente em uma função, ou para quando não sabemos quantos parâmetros serão necessários.

### Destructuring (Desestruturação)

Técnicas para extrair valores de arrays e objetos para novas variáveis/constantes. Usada para simplificar o acesso a estes dados, podendo ser aplicada também em parâmetros de funções.

### Métodos para iteração em arrays: map, filter e reduce

São métodos que permitem realizar operações diversas em elementos de arrays. Funcionam como `loops` especiais, executando uma fução conhecida como `callback` para cada elemento dentro do array.

#### map

percorre os elementos do array e executa algum tipo de transformação, gerando um novo array de dado.

#### filter

percorre os elementos do array filtrando seus valores de acordo com uma ou mais condições, gerando um novo array de dados.


#### reduce

Percorre os elementos do array realizando operações (soma, multiplicação, concatenação etc), gerando um único resultado.

### Comunicação assíncrona

No javascript moderno utilizamos para comunicação assíncrona com Apis REST o comando `fetch` como **Promises** (recursos assíncronos) encadeado com as funções `then` e `catch` (para tratamento de erros genéricos), ou usando a sintaxe `astcn/await` através de funções.