# 🚀 Trampo Certo — DevOps N3

### Avaliação N3 — Ferramentas de Implantação Contínua

**Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
**Instituição:** UNICESUSC  
**Professor:** Flaris Roland Feller  
**Entrega:** 19/11/2026

---

## 📌 Sobre o projeto

O **Trampo Certo** é uma plataforma voltada à conexão entre profissionais freelancers e estabelecimentos do setor de hospitalidade, como restaurantes, hotéis, bares e empresas de eventos.

O objetivo é facilitar a contratação de profissionais para trabalhos temporários, oferecendo uma solução prática para a divulgação de vagas e o gerenciamento de profissionais.

Nesta avaliação N3, utilizamos o backend do Trampo Certo como base para implementar práticas de **DevOps**, incluindo versionamento de código, testes automatizados, integração contínua e implantação automatizada na nuvem.

## 👥 Integrantes

- Fernando Tolentino de Souza Hessmann Dutra
- Jordana Gonçalves Góes
- Mateus Suman Carpenter
- Lucas Ricci

## 🛠️ Tecnologias utilizadas

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

**Testes e qualidade**
- Jest — testes automatizados e cobertura de código
- Supertest — testes de endpoints HTTP
- ESLint — análise estática de código (planejado)
- Selenium — testes de interface (planejado)

**DevOps e infraestrutura**
- Git e GitHub
- GitHub Actions (planejado)
- AWS EC2 (planejado)
- Docker (a avaliar para o deploy)

## 📂 Estrutura do projeto

```text
trampo-certo-devops-n3/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Profissional.js
│   │   └── Vaga.js
│   └── routes/
│       ├── profissionalRoutes.js
│       └── vagaRoutes.js
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

A estrutura será ampliada com testes e workflows durante o desenvolvimento da avaliação.

## ⚙️ Funcionalidades do backend

A API REST disponibiliza operações CRUD para vagas e profissionais.

### Gestão de vagas

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/vagas` | Cadastrar vaga |
| GET | `/api/vagas` | Listar vagas |
| PUT | `/api/vagas/:id` | Atualizar vaga |
| DELETE | `/api/vagas/:id` | Excluir vaga |

### Gestão de profissionais

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/profissionais` | Cadastrar profissional |
| GET | `/api/profissionais` | Listar profissionais |
| PUT | `/api/profissionais/:id` | Atualizar profissional |
| DELETE | `/api/profissionais/:id` | Excluir profissional |

## 🌿 Estratégia de versionamento

O projeto utiliza branches para organizar o desenvolvimento:

- `main`: versão principal da aplicação.
- `develop`: integração das funcionalidades desenvolvidas.
- `feature/*`: desenvolvimento de funcionalidades e configurações específicas.

O fluxo de trabalho previsto é:

1. Criar uma branch de feature a partir da develop.
2. Implementar as alterações.
3. Registrar as modificações por meio de commits.
4. Enviar a branch para o GitHub.
5. Abrir um Pull Request para a develop.
6. Executar as verificações automatizadas antes da integração.

## 🔄 Integração e implantação contínua

A avaliação N3 prevê dois workflows no GitHub Actions.

### Workflow 1 — Continuous Integration e Continuous Delivery

Responsável por automatizar:

- Análise estática do código com ESLint.
- Execução dos testes unitários com Jest.
- Geração de relatório de cobertura.
- Preparação da aplicação para entrega.

### Workflow 2 — Continuous Deployment

Responsável por automatizar a implantação da aplicação em uma instância AWS EC2, permitindo que alterações aprovadas sejam disponibilizadas no servidor.

**Status:** workflows em desenvolvimento.

## 🧪 Testes automatizados

O projeto utilizará Jest e Supertest para validar funcionalidades da API.

Os testes serão desenvolvidos para verificar operações como cadastro, listagem, atualização, exclusão e tratamento de erros.

Também será implementado um teste de interface com Selenium, conforme solicitado na avaliação.

## 💻 Executando o projeto localmente

**Pré-requisitos:**
- Node.js e npm instalados.
- Acesso a um banco MongoDB Atlas.
- Variáveis de ambiente configuradas.

Clone o repositório:

```bash
git clone https://github.com/j0rdanaaa/trampo-certo-devops-n3.git
```

Acesse a pasta:

```bash
cd trampo-certo-devops-n3
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com as configurações exigidas pelo módulo de conexão com o banco