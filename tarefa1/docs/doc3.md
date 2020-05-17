---
id: doc3
title: Projeto de Software - Manipulação e Controle de Arquivos
sidebar_label: Tarefa 3
---

<p>Autor: Renata Malek
<p>Data: 15/05/2020
<p>Versão: 1.0
<p>Dependência: n/a


## Estrutura:
3 programas independentes, codificados em JAVA.
JavaProject ProgramA, ProgramB, ProgramC

## ProgramA

Conforme especificação, este Software executa abertura, leitura e atualização no armazenamento de um valor inteiro dentro do arquivo dataA.txt. Esse procedimento ocorre a cada 5 (cinco) segundos. O valor é incrementado em uma unidade.
Em caso de exceção, o programa irá armazenar o inteiro 0, iniciando novamente o incremento.
Existindo necessidade, o temporizador pode ser alterado no código, no projeto ProgramA, package br.com.renata, classe fileA:


```
final long time = (1000 * 5);
```

O arquivo é gravado no endereço C:/Temp/dataA.txt e pode ser alterado no mesmo caminho indicado anteriormente.

````
File file = new File("C:\\Windows\\Temp\\dataA.txt");
````
## ProgramB

Seguindo especificação, o ProgramB realiza leitura do arquivo gerado dentro do ProgramA (dataA.txt), copia sua informação, e a armazena dentro de um novo arquivo (dataB.txt).
Seu temporizador de execução ocorre de tempos em tempos. O time foi definido em 5.3 segundos, no intuito de maximizar a ocorrência de igualdade entre ambos arquivos.
Existindo necessidade, o temporizador pode ser alterado no código, no projeto ProgramB, package br.com.renata, classe fileB:

````
long time = 5030;
````

Arquivo sendo salvo no endereço C:/Temp/dataB.txt e pode ser alterado no mesmo caminho indicado anteriormente.

````
File file = new File("C:\\Windows\\Temp\\dataB.txt");
````
	
## ProgramC

De acordo com o solicitado, o programa realiza leitura e comparação dos arquivos dataA.txt e dataB.txt, armazenando data, hora, e informação se os arquivos são iguais ou não. O armazenamento dessa inspeção fica armazenado no arquivo dataC.txt.
A verificação ocorre a cada 20 segundos.
Existindo necessidade, o temporizador pode ser alterado no código, no projeto ProgramC, package br.com.renata, classe fileC:

````
final long time = (1000 * 20);
````
Arquivo sendo salvo no endereço C:/Temp/dataC.txt e pode ser alterado no mesmo caminho indicado anteriormente.

````
FileWriter fileName = new FileWriter("C:\\Windows\\Temp\\dataC.txt", true);
````
Esse software conta com um método gerador de relatório, verificando o arquivo dataC.txt e armazenando a quantidade de verificações que foram feitas e qual a porcentagem de igualdade. Esse relatório é armazenado dentro do arquivo report.txt.

O arquivo report.txt é salvo no endereço C:/Temp/report.txt e pode ser alterado no mesmo caminho indicado anteriormente.

````
FileWriter fileName = new FileWriter("C:\\Windows\\Temp\\report.txt");
````