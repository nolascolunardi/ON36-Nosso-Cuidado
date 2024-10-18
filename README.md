# 💜🤰 Nosso Crescimento 🤰💜

## 📌 Introdução

**Nosso Crescimento** é um programa de incentivo no pré-natal e pós-parto, criado para encorajar gestantes a realizarem consultas e exames durante o período gestacional. A plataforma promove uma gestação mais saudável, recompensando as mães com base na sua participação nas consultas. A gamificação desse processo oferece pontuações que podem ser convertidas em descontos para produtos infantis e medicações. Enfermeiras são responsáveis por validar as consultas, garantindo equidade nas recompensas. Empresas parceiras que participam do programa também podem obter benefícios fiscais como forma de incentivo.

## 👤 Atores do Sistema

Atualmente, o sistema possui dois tipos de atores principais:

- **Pessoas Gestantes**: Pessoas que gestam são os usários principais do sistema, que acumulam pontos conforme realizam suas consultas e exames realizados.
- **Enfermeiras/os**: Responsáveis por cadastrar e validar as consultas das pessoas gestantes.

## 💻 Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- **Nest.js**: Framework para construção de aplicações Node.js escaláveis e eficientes.
- **TypeORM**: ORM utilizado para gerenciar as interações com o banco de dados.
- **Docker**: Ferramenta de contêinerização para ambientes de desenvolvimento, utilizada para a instalação do banco de dados Postgres.
- **Jest**: Framework de testes para garantir a qualidade do código.

## 🏛️ Arquitetura

A aplicação segue uma **arquitetura hexagonal**, organizada para facilitar a escalabilidade e manutenibilidade do projeto. Cada módulo da aplicação é dividido em:

- **Application**: Contém os casos de uso e lógica da aplicação.
- **Domain**: Entidades e regras de negócio principais do sistema.
- **Infrastructure**: Comunicação com o banco de dados, APIs externas e outros recursos.
- **Presenter**: Controladores e adaptadores que interagem com a API.

A API segue o padrão de **portas e adaptadores**, e integra o **PostgreSQL** para o banco de dados, além de realizar chamadas à API do **ViaCep** para busca de endereços.

## ⚙️ Funcionalidades

Atualmente, o sistema conta com as seguintes funcionalidades:

- **CRUD de Pessoas Gestantes**: Cadastro, leitura, atualização e exclusão de pessoas gestantes.
- **Cadastro e Listagem de Enfermeiras**: Possibilidade de criar novas enfermeiras no sistema.
- **Cadastro e Atualização de Consultas**: Enfermeiras podem registrar consultas e atualizar seu status.
- **Listagem de Consultas**: Consultas realizadas por uma gestante podem ser visualizadas.
- **Pontuação de Gestantes**: O sistema contabiliza pontos conforme as consultas e exames são realizados. As gestantes podem consultar sua pontuação atual.

## 📃 Regras de Negócio
- Cada consulta tem uma pontuação específica, e uma vez realizada, a consulta não pode ser pontuada novamente.
- Todas as gestantes começam com **0 pontos**.

## ▶️ Como Rodar o Projeto

Para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
2. Instale as dependências:
   ```bash
   npm install
3. Crie um arquivo `.env` na raiz do projeto, seguindo o modelo do arquivo `.env.example`.
4. Inicie o banco de dados com Docker:
   ```bash
   docker-compose up
5. Execute as migrations para criar as tabelas no banco de dados:
   ```bash
   npm run typeorm migration:run
6. Inicie a aplicação:
   ```bash
    npm run start:dev
A aplicação estará disponível em `http://localhost:3000`.

## ✅  Rotas da API

A API possui as seguintes rotas:
- ### Enfermeiras
   `` POST /enfermeiras ``: Cria uma nova enfermeira.
   
   `` GET /enfermeiras ``: Retorna todas as enfermeiras cadastradas.
   
   `` GET /enfermeiras/:id ``: Retorna uma enfermeira específica.
   
   `` PUT /enfermeiras/:id ``: Atualiza os dados de uma enfermeira.
- ### Pessoa Gestante
   `` POST /pessoasGestantes ``: Cria uma nova pessoa gestante.
   
   `` GET /pessoasGestantes ``: Retorna todas as pessoas gestantes cadastradas.
   
   `` GET /pessoasGestantes/:id ``: Retorna uma pessoa gestante específica.
   
   `` PUT /pessoasGestantes/:id ``: Atualiza os dados de uma pessoa gestante.
   
   `` GET /pontuacao/:id ``: Retorna a pontuação de uma pessoa gestante.``
- ### Consultas
   `` POST /consultas ``: Cria uma nova consulta.
   
   `` GET /consultas ``: Retorna todas as consultas cadastradas.
   
   `` GET /consultas/:id ``: Retorna uma consulta específica.
   
   `` PUT /consultas/:id ``: Atualiza o status de uma consulta.
- ### Endereços
   `` GET /enderecos/:cep ``: Retorna o endereço correspondente ao CEP informado.
- ### Pontuação
   `` GET /pontuacao/:id ``: Retorna a pontuação de uma pessoa gestante.

## 🔮 Futuras Implementações
- **Autenticação**: Implementar autenticação para garantir a segurança das rotas.
- **Crud de Empresas Parceiras**: Permitir o cadastro de empresas parceiras que oferecem descontos.
- **Maior tipos de consultas**: Adicionar mais tipos de consultas e exames para pontuação.
- **Validação de CPF e CNPJ**: Verificar se o CPF/CNPJ informado é válido.


## 💜 Feito por:
- ### [Ana Laura Nolasco Lunardi](@nolascolunardi)
