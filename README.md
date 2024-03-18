
# D-Wallet API

API de uma carteira virtual com integração com MongoDB

## Tecnologias utilizadas

* **Backend:** Node.js, Express, JWT, BCRYPT, JOI 
* **Database:** MongoDB

## Funcionalidades

- CRUD de usuários
- Autenticação JWT
- CRUD de transações (entradas e saídas)
- Utilização de Token para autenticar o usuário com 24 horas de duração.


## Aprendizado e Desafios:

Além das habilidades de codificação, este projeto foi uma oportunidade para explorar e aprender sobre algumas bilbiotecas como:

* **BCRYPT:** É um método de criptografia do tipo hash para senhas.
* **JOI:** Responsável por fazer as validações nos objetos retornados da API.


## Documentação da API

### Autenticação

#### Cadastro de usuário

```http
  POST /signup
```
Enviar um JSON:

```
{
	"name": "Nome do Usuario",
	"email": "email.usuario@teste.com",
	"password": "123456"
}
```


#### Login do usuário
Enviar um JSON:

```http
  POST /signin
```
```
{
	"email": "email.usuario@teste.com",
	"password": "123456"
}
```
**Após fazer o Post do Login, anotar o Token para próximos passos.**
Sempre coloque esses parametros no Header ou no Auth para conseguir visualizar as informações:
| Header   | Tipo       | Exemplo de token                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer` | `Authorization` | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTcyODEwMzY5NmUxZTA4MGQ2NzBjZCIsImlhdCI6MTcwNTQ1MzYxMiwiZXhwIjoxNzA1NTQwMDEyfQ.Z0xsaXqjAHBEpB8XSjKAK8u30GKp3EHttaCdwoEBUuE |


#### Retorna as transações do usuário
```http
  GET /transactions
```

#### Adiciona uma transação e retorna os dados

```http
  POST /transactions
```

```
{
	"value": 5000,
	"description": "Salário",
	"type": "input"
}
```
**Retorno:**
```
{
	"value": 5000,
	"description": "Salário",
	"userId": "65a728103696e1e080d670cd",
	"created_at": "2024-01-17T00:52:32.817Z",
	"_id": "65a7289e3696e1e080d670df",
	"__v": 0
}
```


#### Alterar dados de uma transação
Use o parametro _id na URL

```http
  POST /transactions/65a7289e3696e1e080d670df
```

```
{
	"value": 5000,
	"description": "Salário",
	"type": "input"
}
```

#### Deletar uma transação:
Use o parametro _id na URL

```http
  DELETE /transactions/65a7289e3696e1e080d670df
```


## Contribuindo

Contribuições são sempre bem-vindas!
