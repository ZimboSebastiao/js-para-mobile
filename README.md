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