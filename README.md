# API - Projeto 2 do Módulo 4 BlueEdTech Parte 2 ("Projeto 3": Adicionado validação JWT, banco many-to-many)

<img align="right" height="170" width="200" src="https://c.tenor.com/RNpjaR9Iq0oAAAAC/files-api.gif">

Essa é uma API criada utilizando as aulas do Módulo 4 de Back End em NodeJS da BlueEdTech.
A idéia é criar um CRUD utilizando o framework NestJS, em um banco de dados relacional postgres, utilizando JWT para criação e envio de token, Prisma como ORM e Swagger para documentação das rotas.

<div style="display: inline_block"><br>
  Tecnologias Utilizadas:
  <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
      <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">
      <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg">
      <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg">
      <img align="center" height="30" width="80" src="https://miro.medium.com/max/690/1*aKVg84SP5oPV9fwOnbl6yQ.png">
      <img align="center" height="30" width="30" src="https://avatars.githubusercontent.com/u/17219288?s=280&v=4">
</div>


## Tabelas utilizadas

      O projeto possui seis tabelas: Usuário(com user e senha), Seguidores, Seguindo, Tweet, Categoria e Favorito.
      Temos duas tabelas se relacionando Many to Many de acordo com o diagrama abaixo: 
      
![Proj 02](https://github.com/pfreisleben/Projeto02-Blue-Twitter/blob/master/db_final_diagram.png)


## Iniciando o aplicativo

    Em modo de desenvolvimento:
    npm run start:dev 
    Em ambiente de produção:
    npm run start

## URL Base

    https://localhost:3000
    
## Acesso Swagger

    https://localhost:3000/api

## Listando todos os registros nas tabelas (GET)

        {urlBase}/usuarios
        {urlBase}/seguidores
        {urlBase}/seguindo
        {urlBase}/tweets
        {urlBase}/categoria-tweets
        {urlBase}/favorito-tweets

## Os retornos da aplicação estão no formato JSON, exemplo:

### Retorno de {urlBase}/usuarios

        [{"id": 5,"nome": "teste","sobrenome": "teste","email": "teste@teste.com","senha": "teste", "sobre": "Teste", "aniversario": "28/12/2021", "criado_em": "28/12/2021"}]

## Validações
### Todas as rotas sendo validadas atraves dos decorators

## Listando objeto específico (GET)

### Deverá ser passado um parametro(id) na rota _/{urlBase}/{tabela}/{id}_, exemplo:

        {urlBase}/usuarios/1
        {urlBase}/seguidores/2
        {urlBase}/seguindo/3
        {urlBase}/tweets/4
        {urlBase}/categoria-tweets/5
        {urlBase}/favorito-tweets/6
        Será retornado um objeto no formato JSON com os dados do banco.

## Adicionando novos objetos (POST)

### Para adicionar um novo objeto/usuário a alguma tabela do banco, deverá ser enviado um JSON para a rota correta, tendo os dados corretos, caso contrário a API retornará um erro. Campos abaixo marcados com "?" são opcionais.

#### Para adicionar um novo objeto na tabela **USUÁRIOS**:

      Rota: /usuarios/
      Fomato JSON esperado: { "nome": String, "sobrenome": String, "email": String, "senha": String, "sobre": String, "aniversario": String }

#### Para adicionar um novo objeto na tabela **SEGUIDORES**:

      Rota: /seguidores/
      Fomato JSON esperado: { "nome": String, "idSeguidor": Number, "usuarioId": Number }

#### Para adicionar um novo objeto na tabela **SEGUINDO**:

      Rota: /seguindo/
      Fomato JSON esperado: { "nome": String, "usuarioId": Number, "idSeguindo": Number}
      
#### Para adicionar um novo objeto na tabela **TWEETS**:

      Rota: /tweets/
      Fomato JSON esperado: { "conteudo": String, "usuarioId": Number }
   
#### Para adicionar um novo objeto na tabela **CATEGORIA**:

      Rota: /categoria/
      Fomato JSON esperado: { "tweetId": Number, "assignedBy": String, "categoriaId": Number }
   
#### Para adicionar um novo objeto na tabela **FAVORITO**:

      Rota: /favorito/
      Fomato JSON esperado: { "tweetId": Number, "assignedBy": String, "usuarioId": Number }
      

### Caso exista algum problema com os dados do JSON enviado, a aplicação retornará um erro com detalhes.

### Caso o objeto seja adicionado com sucesso, a API retornará um JSON igual ao objeto adicionado ao banco.

## Autenticação (JWT)

      A rota /auth é utilizada para fazer a autenticação do usuário.
      Esta rota espera um requisição do tipo POST, com um JSON contendo o campo "email" e "senha" do usuário.
      Caso a autenticação seja feita com sucesso(Usuário existir e email e senha estarem corretos), será retornado o email, junto com um Token JWT.
      O JWT esta intermediando alem da autenticação a autorização ou seja, além do token de acesso o usuário só pode interagir se o token for válido.
      Esta rota também aceita uma requisição do tipo GET, que retornará a mensagem "logado", caso o usuário esteja logado.
      

## Atualizando um objeto (PATCH)

### Para atualizar uma linha de alguma tabela, deverá ser informado o ID do objeto na rota, e enviado um JSON com os novos valores através do método PATCH.

#### Para atualizar um objeto na tabela **USUÁRIOS**:

      Rota: /usuarios/{id}
      Fomato JSON esperado: { "email": String, "senha": String, "nome": string, "imagem": String?, "bio": String, "nascimento": DateTime }

#### Para atualizar um  objeto na tabela **SEGUIDORES**:

      Rota: /seguidores/{id}
      Fomato JSON esperado: { "idSeguidor": Number, "usuarioId": Number }

#### Para atualizar um  objeto na tabela  **SEGUINDO**:

      Rota: /seguindo/{id}
      Fomato JSON esperado: { "usuarioId": Number, "idSeguindo": Number}
      
#### Para atualizar um  objeto na tabela  **TWEETS**:

      Rota: /tweets/{id}
      Fomato JSON esperado: { "texto": String, "emoji": String, "usuarioId": Number }
      
#### Para atualizar um objeto na tabela **CATEGORIA**:

      Rota: /categoria/{id}
      Fomato JSON esperado: { "tweetId": Number, "assignedBy": String, "categoriaId": Number }
   
#### Para atualizar um objeto na tabela **FAVORITO**:

      Rota: /favorito/{id}
      Fomato JSON esperado: { "tweetId": Number, "assignedBy": String, "usuarioId": Number }

### Caso o objeto seja atualizado com sucesso, a API retornará um JSON igual ao objeto atualizado no banco.


## Excluindo um objeto (DELETE)

### Para deletar um objeto de alguma tabela, deverá ser informado o ID do objeto na rota.

#### Para deletar um objeto na tabela **USUARIOS**:

      Rota: /usuarios/{id}

#### Para deletar um objeto na tabela **SEGUIDORES**:

      Rota: /seguidores/{id}

#### Para deletar um objeto na tabela **SEGUINDO**:

      Rota: /seguindo/{id}
      
#### Para deletar um objeto na tabela **TWEETS**:

      Rota: /tweets/{id}
      
#### Para deletar um objeto na tabela **CATEGORIA**:

      Rota: /categoria/{id}

#### Para deletar um objeto na tabela **FAVORITO**:

      Rota: /favorito/{id}

### Caso o objeto seja deletado com sucesso, a API retornará um JSON igual ao objeto deletado.
