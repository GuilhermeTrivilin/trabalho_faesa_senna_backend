# README #


### Para que serve este repositório? ###

Template de um projeto Express.js e SequelizeORM para micro-serviços

### Instalação do docker

* Para Windows: https://docs.docker.com/docker-for-windows/install/#install-docker-for-windows
* Para Linux ( Ubuntu ): https://docs.docker.com/install/linux/docker-ce/ubuntu/

### Instalação do Docker Compose

* https://docs.docker.com/compose/install/#install-compose

### Como faço para configurar? ###


```
HTTP: git clone https://seu-nome@bitbucket.org/flexait/express-template.git
SSH: git clone git@bitbucket.org:flexait/express-template.git

cd express-template
```

## Usando

### Docker

Para construir as imagens do projeto build do docker execute:

```
make build
```

Para rodar o projeto execute:

```
make up
```

Para criar o banco e executar as migraçoes execute:

```
make setup
```

Para destruir as imagens execute:

```
make destroy
```

Para conectar no container do NodeJS e executar operações diversas execute o comando abaixo com o compose rodando.

```
sudo docker exec -it nodejs sh
```

Para conectar no container do MySQL e executar operações diversas execute o comando abaixo com o compose rodando.

```
sudo docker exec -it mysql bash
```

Então para acessar o bash interno do MySQL execute:

```
mysql -u root -p
```

Sera solicitado uma senha para entrar no bash do MySQL, a senha é: root

### Usando o sistema em modo de desenvolvimento

```
make build
make up
```

Logo após o buildar e levantar os containers do projeto, ultilize o seguinte comando para criar o banco, tabelas e executar as migrações:

```
make setup
```

Após executado o comando para levantar o servidor em localhost, siga para o seguinte endereço: localhost:3000/

### .ENV

Para se conectar ao banco de dados do projeto, precisamos de um arquivo .env na raiz do projeto, para criar esse arquivo, execute:

```
touch .env
```

Após o mesmo ter sido criado, adicione as informações da sua aplicação:

```
PORT=3000

DB_HOST=mysql
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=express
DB_PORT=3306  
```

OBS: É de extrema importancia que a variavel de ambiente "DB_HOST" seja mysql, pois é o container do MySQL que esta rodando simultaneamente com a aplicação

### Como eu testo os endpoints? ###

Primeiro passo, instale alguma ferramenta para testes de APIs (Eu recomendo o postman).

### Instalação das ferramentas

* Postman: https://www.postman.com/
* Insomnia: https://insomnia.rest/

Após ter instalado uma dessas ferramentas, crie uma nova aba para testar um endpoint e tente com um dos listados abaixo.

OBS: A aplicação conta com apenas uma entidade (Users) para servir como base para entidades posteriores, portanto seguem alguns requests nos endpoints de user:

INDEX - Listar todos os usuários

```
URL: localhost:3000/users
METHOD: GET
```

SHOW - Buscar um usuário pelo ID

```
URL: localhost:3000/user/id
METHOD: GET
```

STORE - Criar um usuário

```
URL: localhost:3000/users
METHOD: POST
BODY: { name: "string", email: "string", password: "string" }
```

UPDATE - Atualizar os dados do usuário

```
URL: localhost:3000/user/id
METHOD: PUT
BODY: { name: "string", email: "string", password: "string" }
```

DESTROY - Deletar um usuário pelo ID

```
URL: localhost:3000/user/id
METHOD: DELETE
```
