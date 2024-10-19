## ✅  Rotas da API - Nosso Cuidado

A API possui as seguintes rotas:
- ### Enfermeiras
  `` POST /enfermeiras ``: Cria uma nova enfermeira.

  `` GET /enfermeiras ``: Retorna todas as enfermeiras cadastradas.
- ### Pessoa Gestante
  `` POST /pessoas ``: Cria uma nova pessoa gestante.

  `` GET /pessoas ``: Retorna todas as pessoas gestantes cadastradas.

  `` GET /pessoas/:email ``: Retorna uma pessoa gestante específica pelo email.

  `` PATCH /pessoas/atualizar/:email ``: Atualiza os dados de uma pessoa gestante.

  `` DELETE /pessoas/:email ``: Exclui uma pessoa gestante existente.``
- ### Consultas
  `` POST /consultas ``: Cria uma nova consulta.

  `` GET /consultas ``: Retorna todas as consultas cadastradas.

  `` GET /consultas/pessoa/:email ``: Retorna consultas de uma pessoa gestante específica pelo email dela.

  `` GET /consultas/:id ``: Retorna uma consultas específica pelo id.

  `` PATCH /consultas/:id ``: Atualiza o status de uma consulta.

  `` DELETE /consultas/:id ``: Exclui uma consulta existente e que nao esteja com status REALIZADA.
- ### Pontuação
  `` GET /pontuacao/:email ``: Retorna a pontuação de uma pessoa gestante.