# Avivamento & Restauração SJM

Site institucional da Igreja Avivamento & Restauração SJM, desenvolvido para a comunidade cristã em São João da Madeira, Portugal.

O projeto começou como uma aplicação web utilizando HTML, CSS e JavaScript e posteriormente foi reestruturado em React com Vite, adotando uma arquitetura baseada em componentes e organização modular.

## Sobre o Projeto

O objetivo do projeto é criar uma plataforma institucional moderna, responsiva e preparada para futuras integrações, permitindo apresentar a igreja, seus eventos, atividades e formas de contacto.

Além da aplicação frontend, o projeto está evoluindo para uma arquitetura com backend e banco de dados, preparando a aplicação para funcionalidades que exigem persistência e gerenciamento de dados.

## Objetivos

* Criar uma presença digital para a igreja.
* Apresentar informações institucionais.
* Divulgar eventos e atividades.
* Facilitar o contacto com a igreja.
* Criar uma base tecnológica preparada para futuras funcionalidades.
* Aplicar boas práticas de desenvolvimento, organização e segurança.

## Funcionalidades

### Atualmente

* Página institucional
* Sobre Nós
* Eventos
* Localização e contacto
* Formulário de apoio
* Seção de colaboração
* Layout responsivo
* Menu responsivo
* Componentização em React
* Integração com backend para eventos

### Em desenvolvimento

* Sistema de inscrições em eventos
* Banco de dados
* Autenticação e autorização
* Área administrativa
* Conteúdos e vídeos
* Gestão de membros e líderes
* Integrações para contribuições

## Arquitetura da Aplicação

O projeto está dividido em frontend e backend.

### Frontend

Desenvolvido utilizando React com Vite.

A aplicação utiliza componentes reutilizáveis e separação por páginas e funcionalidades.

### Backend

Desenvolvido com Node.js e Express.

Responsável pela API, regras de negócio, validação dos dados e comunicação com o banco de dados PostgreSQL.

### Banco de Dados

PostgreSQL é utilizado para persistência dos dados.

A estrutura do banco está sendo gerenciada através de migrations do Supabase.

## Tecnologias

### Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express
* PostgreSQL
* Supabase
* Jest
* Supertest

### Desenvolvimento

* Git
* GitHub
* Vercel
* ESLint
* npm

## Conceitos de React Utilizados

Durante o desenvolvimento foram aplicados conceitos fundamentais do React, incluindo:

* Componentes
* Props
* Hooks
* Estado
* Renderização condicional
* Listas
* JSX
* Organização de componentes
* Separação de páginas e funcionalidades

## Estrutura do Projeto

```text
Avivamento-e-Restauração-SJM/
│
├── Versao2.0--Projeto-React-Implementação/
│   └── Versao2.0/
│       │
│       ├── iar-sjm/
│       │   └── frontend
│       │
│       └── backend/
│           ├── src/
│           │   ├── config/
│           │   ├── controllers/
│           │   ├── errors/
│           │   ├── repositories/
│           │   ├── routes/
│           │   └── services/
│           │
│           ├── tests/
│           └── package.json
│
└── README.md
```

## Como Executar

### Frontend

Entre na pasta do frontend:

```bash
cd Versao2.0--Projeto-React-Implementação/Versao2.0/iar-sjm
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

### Backend

Entre na pasta do backend:

```bash
cd Versao2.0--Projeto-React-Implementação/Versao2.0/backend
```

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

Execute o lint:

```bash
npm run lint
```

## Segurança

O projeto está sendo desenvolvido considerando segurança desde as primeiras etapas da arquitetura.

Entre as medidas implementadas:

* Validação de dados recebidos pela API
* Queries SQL parametrizadas
* Tratamento de erros
* Variáveis de ambiente para informações sensíveis
* `.env` excluído do controle de versão
* Proteção de arquivos temporários do Supabase
* Headers de segurança no frontend
* Testes automatizados
* Análise de dependências com `npm audit`

## Testes

O backend possui testes automatizados utilizando Jest e Supertest.

Os testes da API exercitam Express, controllers e services com um mock do
repository, configurado em `backend/tests/setup.js`. Não precisam de `.env`
nem de `DATABASE_URL`. Os mocks são reiniciados entre os testes.

`backend/src/config/database.js` bloqueia a conexão real quando detecta
`NODE_ENV=test` ou `JEST_WORKER_ID`, evitando gravações acidentais no Supabase.
Esses testes não verificam o SQL nem a conexão PostgreSQL; testes de integração
futuros devem usar um banco separado e uma configuração explícita.

No estado atual:

* 9 testes passando
* 3 suites passando
* ESLint sem erros
* `npm audit` sem vulnerabilidades reportadas

## Projeto em Produção

Frontend:

https://avivamento-e-restauracao-sjm.vercel.app/

Repositório:

https://github.com/GilbertoAlbuquerque1/Avivamento-e-Restauracao-SJM

## Roadmap

* [x] Desenvolvimento inicial do frontend
* [x] Migração para React
* [x] Organização dos componentes
* [x] Deploy do frontend
* [x] Implementação inicial do backend
* [x] Integração com PostgreSQL
* [x] Testes automatizados
* [x] Validação dos dados da API
* [x] Primeira etapa do audit de segurança
* [ ] Finalização do audit de segurança do backend
* [ ] Autenticação
* [ ] Área administrativa
* [ ] Sistema de inscrições
* [ ] Gestão de conteúdos
* [ ] Expansão da plataforma

## Aprendizados

Este projeto também funciona como um projeto de estudo e aplicação prática de conceitos de desenvolvimento web.

Durante sua construção estão sendo aplicados conhecimentos de:

* HTML
* CSS
* JavaScript
* React
* Node.js
* APIs REST
* PostgreSQL
* Git e GitHub
* Testes automatizados
* Segurança de aplicações web
* Arquitetura de software

## Autor

Gilberto Albuquerque

Desenvolvedor Web em formação, com foco em Frontend, React e desenvolvimento de aplicações web.

## Licença

Este projeto foi desenvolvido para fins institucionais e de estudo.
