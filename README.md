# cadastro de cliente paggcerto
## Solução
Este projeto é equivalente ao teste para vaga de Front-end da empresa PaggCerto. Nele foi proposto que fosse desenvolvido uma tela para cadastro de usuários da empresa. Os dados a serem preenchidos dependia do tipo da pessoa (física ou jurídica) e, no fim, ela deveria receber um email para validação de cadastro.

A implementação do projeto consistiu na criação de formulários com o uso do VueJs, Sass e HTML. Foi utilizado o NPM e YARN para execução e instalação de bibliotecas necessárias. Existem três pastas principais no projeto: assets, onde é encontrado códigos que sejam compartilhados por todos os códigos; components, encontra-se os components que são utilizados por todos; e views, que são as telas do projeto.

Cada código presente em components e views possui uma pasta com seu nome (por exemplo, Header, referente ao cabeçalho da página). Dentro dessas pastas, é possível encontrar um arquivo index.vue e, caso fosse necessário, uma pasta para arquivos css que fossem ser utilizados somente por eles.


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
