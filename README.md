# API de Gerenciamento de Salas de Reunião

## Objetivo
API REST para facilitar o agendamento e gerenciamento de salas de reunião, evitando conflitos de uso entre equipes.

## Funcionalidades
- Cadastro e login de usuários (JWT)
- Listagem de salas
- Agendamento de salas sem conflitos
- Cancelamento de agendamentos
- Documentação Swagger disponível em `/api-docs`

## Como executar
1. Instale as dependências:
   ```bash
   npm install express jsonwebtoken swagger-ui-express
   ```
2. Execute a API:
   ```bash
   node src/server.js
   ```
3. Acesse a documentação em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Estrutura
- `src/routes`: Rotas da API
- `src/controllers`: Lógica dos endpoints
- `src/services`: Regras de negócio (pode ser expandido)
- `src/models`: Dados em memória
- `recursos/swagger.json`: Documentação Swagger

## Exemplo de uso
Veja exemplos de requisições na documentação Swagger.
