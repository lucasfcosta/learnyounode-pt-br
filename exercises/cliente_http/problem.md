Escreva um programa que realize uma requisição HTTP GET a uma URL fornecida para você como primeiro argumento da linha de comando. Escreva o conteúdo da String de **cada** evento "data" da resposta em uma nova linha do console (stdout).

----------------------------------------------------------------------
## DICAS

Para este exercício você vai precisar usar o módulo `http`.

A documentação do módulo `http` pode ser encontrada apontando seu navegador para:
  {rootdir:/node_apidoc/http.html}

O método `http.get()` é um atalho para simples requisições GET, use-o para simplificar sua solução. O primeiro argumento para `http.get()` pode ser a URL para a qual você quer fazer o GET. Forneça um callback como segundo argumento.

Diferente de outras funções callback. Essa tem a assinatura:

```js
function callback (response) { /* ... */ }
```

Onde o objeto `response` é um objeto **Stream** do Node. Você pode tratar as Streams do Node como objetos que emitem eventos, os três eventos mais interessantes são: "data", "error" e "end". Você os escuta da seguinte forma:

```js
response.on("data", function (data) { /* ... */ })
```

"data" é emitido quando um pedaço de informação está disponível e pode ser processado. O tamanho deste pedaço depende do tamanho do dado em questão.

O objeto `response` / Stream que você pega de `http.get()` também tem um método `setEncoding()`. Se você chamar este método com "utf8", o evento "data" vai emitir Strings ao invés do objeto padrão `Buffer` do Node, os quais você tem, explicitamente, que converter para String.

----------------------------------------------------------------------
