# API - Projeto 2 do Módulo 4 BlueEdTech

Essa é uma API criada utilizando as aulas do Módulo 4 de Back End em NodeJS da BlueEdTech.

A idéia é criar um CRUD utilizando o framework NestJS, em um banco de dados relacional postgres, utilizando JWT para criação e envio de token, Prisma como ORM e Swagger para documentação das rotas.

Linguagem Utilizada: JavaScript / TypeScript

Banco de dados: Postgres

## Tabelas utilizadas

      O projeto possui quatro tabelas: Usuário, Seguidores, Seguindo e Tweet.
      O banco foi modelado seguindo a imagem abaixo: 
      (Foi adicionamo email e senha na tabela usuários)
      
![Proj 02](https://user-images.githubusercontent.com/55242537/147594560-77bfb778-25f8-41e1-bdfd-4402a57900b7.png)


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

## Os retornos da aplicação estão no formato JSON, exemplo:

### Retorno de {urlBase}/usuarios

        [{"id": 3,"email": "teste@gmail.com","senha": "teste","nome": "teste",
        "imagem": "https://lh3.googleusercontent.com/eWdfOze-Fbc9s3m0HrnyGrNRghsOYt4ragW5T0cpqBtsNLa4cALROO61jo_VKqDSgn-liITsOI-4JLc=w1349-h621",
        "bio": "Teste", "nascimento": "28/12/2021", "criado_em": "28/12/2021"}]

## Listando objeto específico (GET)

### Deverá ser passado um parametro(id) na rota _/{urlBase}/{tabela}/{id}_, exemplo:

        {urlBase}/usuarios/1
        {urlBase}/seguidores/2
        {urlBase}/seguindo/3
        {urlBase}/tweets/4
        Será retornado um objeto no formato JSON com os dados do banco.

## Adicionando novos objetos (POST)

### Para adicionar um novo objeto/usuário a alguma tabela do banco, deverá ser enviado um JSON para a rota correta, tendo os dados corretos, caso contrário a API retornará um erro. Campos abaixo marcados com "?" são opcionais.

#### Para adicionar um novo objeto na tabela **USUÁRIOS**:

      Rota: /usuarios/
      Fomato JSON esperado: { "email": String, "senha": String, "nome": string, "imagem": String?, "bio": String, "nascimento": DateTime }

#### Para adicionar um novo objeto na tabela **SEGUIDORES**:

      Rota: /seguidores/
      Fomato JSON esperado: { "idSeguidor": Number, "usuarioId": Number }

#### Para adicionar um novo objeto na tabela **SEGUINDO**:

      Rota: /seguindo/
      Fomato JSON esperado: { "usuarioId": Number, "idSeguindo": Number}
      
#### Para adicionar um novo objeto na tabela **TWEETS**:

      Rota: /tweets/
      Fomato JSON esperado: { "texto": String, "emoji": String, "usuarioId": Number }
      

### Caso exista algum problema com os dados do JSON enviado, a aplicação retornará um erro com detalhes.

### Caso o objeto seja adicionado com sucesso, a API retornará um JSON igual ao objeto adicionado ao banco.

## Autenticação (JWT)

      A rota /auth é utilizada para fazer a autenticação do usuário.
      Esta rota espera um requisição do tipo POST, com um JSON contendo o campo "email" e "senha" do usuário.
      Caso a autenticação seja feita com sucesso(Usuário existir e email e senha estarem corretos), será retornado o email, junto com um Token JWT.
      
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

### Caso o objeto seja atualizado com sucesso, a API retornará um JSON igual ao objeto atualizado no banco.


      

## Excluindo um objeto (DELETE)

### Para deletar um objeto de alguma tabela, deverá ser informado o ID do objeto na rota.

#### Para deletar um objeto na tabela **FILMES**:

      Rota: /filmes/{id}

#### Para deletar um objeto na tabela **GENEROS**:

      Rota: /generos/{id}

#### Para deletar um objeto na tabela **PARTICIPANTES**:

      Rota: /participantes/{id}

### Caso o objeto seja deletado com sucesso, a API retornará um JSON igual ao objeto deletado.
