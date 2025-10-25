Objetivo: Criar uma API rest  para facilitar agendamento da sala de reunião da empresa para evitar conflitos entre times e que querem utilizar a mesma sala, mas não tem como saber que ja esta em uso . Preciso de um programa simples que resolva isso: agendamento e quer gerenciamento das salas de reunião

Contexto:
 API possui as seguintes funcionalidades: Crie as funcionalidades e endpoints . 
1. Autenticação(cadastro e login)
Critérios de aceitação:
Quando o funcionário acessar a plataforma deve ser solicitado uma autenticação
Deve ser necessário um Login e Senha para se autenticar no sistema
Após incluir um login correto deve ser gerado um token
Respostas esperadas da API: 
-200 (Login com sucesso) e 400 (Credenciais inválidas)

2. Cadastro de salas
Critérios de aceitação:
Deve ser possível cadastrar nova sala
200 (Salas cadastrada com sucesso)
400 (Sem autenticação para cadastrar sala)

2. Listagem das salas
Critérios de aceitação:
Deve ser possível visualizar todas as salas existentes
Status esperados da API:
200 (Salas listadas com sucesso)
400 (Sem autorização para visualizar salas)


3.Agendamento de sala
Critérios de aceitação:
Deve ser possível selecionar a sala desejada para a reunião
Deve ser possível informar data e horário de início e fim da reunião e realizar o agendamento
Caso a sala esteja disponivel, o agendamento é realizado
Caso a sala já esteja agendada, o sistema não deve permitir o agendamento
Deve ser possível informar nome e descrição da reunião
Resposta esperada da API:
200 (agendamento realizado com sucesso)
400 (sala não está disponível para uso)

4. Cancelamento do agendamento
code 200 quando houver cancelamento realizado com sucesso
Deve retornar status code 400 quando o us

**Regras**

- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.



