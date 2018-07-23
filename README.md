# cadastro de cliente paggcerto
## Solução
Este projeto é equivalente ao teste para vaga de Front-end da empresa PaggCerto. Foi proposto o desenvolvimento de uma tela para cadastro de usuários da empresa. Os dados a serem preenchidos dependem do tipo da pessoa (física ou jurídica) e, no fim, e do envio de email de validação de cadastro.

A implementação do projeto consiste na criação de formulários com o uso do VueJs, Sass e HTML. Foi utilizado o NPM e YARN para execução e instalação de bibliotecas necessárias.

Existem três pastas principais no projeto:
- assets, onde é encontrado códigos que sejam compartilhados por todos os códigos;
- omponents, encontra-se os components que são utilizados por todos;
- views, que são as telas do projeto.

Cada código no components e views possui uma pasta com nome principal de sua função (por exemplo, para o cabeçalho da página foi utilizado uma pasta com nome Header). Dentro dessas pastas, é possível encontrar um arquivo index.vue e, caso fosse necessário, uma pasta para arquivos css que fossem ser utilizados somente por eles.


## Organização
```
├── src
│   ├── assets
│   │   └── css
├── components
│   ├── Header
├── views
│   ├── Cadastro
│   │   └── css
│   ├── CadastroFisica
│   ├── CadastroJuridica
│   ├── DadosBancarios
│   ├── Home

```

## Para Execução do Projeto

``` bash
# Instalar as dependências
yarn

# Execução localhost:8080
yarn run dev

```

## Bibliotecas utilizadas
Esta aplicação utiliza:
- VueJs (para construir a interface do app);
- vuejs-router (auxilia na construção das rotas);
- BootstrapVue (framework utilizada para interface).
