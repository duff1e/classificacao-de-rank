# 🎮 Classificação de Rank de Herói

Esta calculadora de rank foi criada para o projeto de Calculadora de Partidas Rankeadas realizado para o **Bootcamp Potência Tech iFood: Programação do Zero** oferecido pela **DIO** numa bolsa concedida pelo **iFood**.

Seu objetivo era utilizar o conteúdo ensinado até então, como variáveis, estruturas condicionais, loopings e operadores e funções, mas além disso criei uma estrutura visual de HTML e CSS para utilizar o comando `prompt` para perguntar para o usuário a quantidade de vitórias e derrotas para então realizar o cálculo, deixando-a interativa. 

A linguagem de programação utilizada é o JavaScript, sendo ela o foco do Bootcamp, mas estruturei o projeto com HTML e CSS para rodá-lo em uma página web. 

Utilizando de funções e um looping, a primeira etapa do programa é perguntar em um input a quantidade de vitórias do herói e logo em seguida a quantidade de derrotas, armazenando ambas as respostas em variáveis. Por fim, o código faz o cálculo através de outra função, na lógica de `vitórias - derrotas`, e o resultado é comparado, em outra função, com os ranks fornecidos que constam na lista de classificação a seguir, passando por uma estrutura de decisão `if-else if-else`:

|   Rank   | Min | Max |
|----------|-----|-----|
|Ferro     |     |10   |
|Bronze    |11   |20   |
|Prata     |21   |50   |
|Ouro      |51   |80   |
|Diamante  |81   |90   |
|Lendário  |91   |100  |
|Imortal   |101  |     |


Definido o rank, o código então utiliza uma função específica para retornar uma mensagem depois de passar por uma estrutura de decisão para verificar se é a última iteração do `for` que tem a finalidade de fazer todo o processo 10 vezes e dependendo da quantidade de vezes, ou seja, se for a última, ele exibe uma mensagem diferente final e encerra o programa.

Espero que gostem do pequeno projeto! Obrigada.