
# 🚀 Trampo Certo — DevOps N3

### Avaliação N3 — Ferramentas de Implantação Contínua

**Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
**Instituição:** UNICESUSC  
**Professor:** Flaris Roland Feller  
**Entrega:** 19/11/2026

---

## 📌 Sobre o projeto

O **Trampo Certo** é uma plataforma voltada à conexão entre profissionais freelancers e estabelecimentos do setor de hospitalidade, como restaurantes, hotéis, bares e empresas de eventos.

O objetivo é facilitar a contratação de profissionais para trabalhos temporários, oferecendo uma solução para divulgação de vagas e gerenciamento de profissionais.

Nesta avaliação N3, utilizamos o backend do Trampo Certo como base para implementar práticas de **DevOps**, incluindo versionamento de código, testes automatizados, análise estática, integração contínua e implantação automatizada na nuvem.

## 👥 Integrantes

- Fernando Tolentino de Souza Hessmann Dutra
- Jordana Gonçalves Góes
- Mateus Suman Carpenter
- Lucas Ricci

## 🛠️ Tecnologias utilizadas

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Testes e qualidade

- Jest — testes automatizados e cobertura de código
- Supertest — testes dos endpoints HTTP
- ESLint — análise estática de código
- Selenium WebDriver — teste automatizado de interface
- Google Chrome — execução do teste de interface em modo headless

### DevOps e infraestrutura

- Git e GitHub — versionamento e colaboração
- GitHub Actions — automação dos pipelines CI/CD
- AWS EC2 — hospedagem na nuvem
- PM2 — gerenciamento da aplicação Node.js
- NGINX — proxy reverso e acesso HTTP
- SSH — conexão segura para implantação automática

## 📂 Estrutura do projeto

```text
trampo-certo-devops-n3/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
├── public/
│   └── index.html
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Profissional.js
│   │   └── Vaga.js
│   └── routes/
│       ├── profissionalRoutes.js
│       └── vagaRoutes.js
├── tests/
│   ├── vagas.test.js
│   └── interface.selenium.js
├── app.js
├── server.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

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

O projeto utiliza as seguintes branches:

- `main`: branch principal do repositório.
- `develop`: branch de integração e implantação automática.
- `feature/*`: branches destinadas ao desenvolvimento de funcionalidades, testes e configurações.

### Fluxo de trabalho

1. Criar uma branch de feature.
2. Implementar as alterações necessárias.
3. Registrar as modificações em commits.
4. Enviar a branch ao GitHub.
5. Abrir um Pull Request para `develop`.
6. Executar as verificações automatizadas de CI.
7. Revisar e integrar as alterações.
8. Executar o deploy automático após atualização da branch `develop`.

Durante a avaliação, foi utilizada a branch `feature/testes-unitarios`, posteriormente integrada à `develop` por meio de Pull Request.

## 🔄 Integração e implantação contínua

O projeto utiliza dois workflows do GitHub Actions.

### Workflow 1 — Continuous Integration (CI)

**Arquivo:** `.github/workflows/ci.yml`

O pipeline executa:

1. Instalação das dependências com `npm ci`.
2. Análise estática com ESLint.
3. Testes automatizados com Jest e Supertest.
4. Geração de relatório de cobertura.
5. Teste de interface com Selenium.
6. Publicação do relatório de cobertura como artefato.

O workflow é acionado em pushes para `develop` e `feature/*`, além de Pull Requests destinados à branch `develop`.

**Resultado:** execução concluída com sucesso.

### Workflow 2 — Continuous Deployment (CD)

**Arquivo:** `.github/workflows/cd.yml`

O pipeline é acionado automaticamente quando há um push para a branch `develop`.

O processo realiza:

1. Instalação das dependências.
2. Análise estática com ESLint.
3. Execução dos testes Jest.
4. Conexão SSH com a instância AWS EC2.
5. Atualização do repositório no servidor.
6. Instalação das dependências no servidor com `npm ci`.
7. Reinicialização da aplicação com PM2.
8. Verificação HTTP para confirmar que a aplicação está respondendo.

O workflow utiliza secrets do GitHub para armazenar as informações necessárias à conexão SSH.

**Resultado:** deploy automático executado com sucesso.

## 🧪 Testes automatizados

### Jest e Supertest

**Arquivo:** `tests/vagas.test.js`

Foram implementados seis testes automatizados:

1. Cadastrar uma vaga com sucesso — HTTP 201.
2. Listar vagas — HTTP 200.
3. Atualizar uma vaga — HTTP 200.
4. Excluir uma vaga — HTTP 200.
5. Tentar atualizar uma vaga inexistente — HTTP 404.
6. Tentar cadastrar uma vaga com dados inválidos — HTTP 400.

**Resultado:** 6 testes aprovados.

Para executar:

```bash
npm test
```

Para gerar a cobertura:

```bash
npm run test:coverage
```

A cobertura inicial registrada durante o desenvolvimento foi de aproximadamente 58% das linhas do projeto.

### Selenium

**Arquivo:** `tests/interface.selenium.js`

Foi implementado um teste automatizado de interface utilizando Selenium WebDriver e Google Chrome em modo headless.

O teste valida a interface web de demonstração do Trampo Certo.

Para executar:

```bash
npm run test:selenium
```

**Resultado:** teste executado com sucesso.

### ESLint

O ESLint é utilizado para realizar análise estática do código-fonte, identificando problemas e contribuindo para a qualidade do projeto.

Para executar:

```bash
npm run lint
```

**Resultado:** análise concluída com sucesso.

## 💻 Executando o projeto localmente

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado.
- MongoDB Atlas configurado para execução com banco de dados.
- Google Chrome disponível para testes Selenium.

### 1. Clonar o repositório

```bash
git clone https://github.com/j0rdanaaa/trampo-certo-devops-n3.git
```

### 2. Acessar o projeto

```bash
cd trampo-certo-devops-n3
```

### 3. Instalar as dependências

```bash
npm ci
```

### 4. Configurar o ambiente

Para utilizar o banco de dados, configure as variáveis de ambiente exigidas pela conexão MongoDB do projeto.

Para executar a interface de demonstração sem conexão com o banco, utilize a variável `DEMO_MODE=true`.

### 5. Iniciar a aplicação em modo de demonstração

No PowerShell:

```powershell
$env:DEMO_MODE="true"
$env:PORT="3003"
node server.js
```

Acesse:

http://localhost:3003/interface/

### 6. Executar verificações

```bash
npm run lint
npm test
npm run test:coverage
npm run test:selenium
```

O teste Selenium utiliza o navegador Chrome em modo headless.

## ☁️ Implantação na AWS EC2

A aplicação foi implantada em uma instância AWS EC2 com Ubuntu.

### Componentes da infraestrutura

- **AWS EC2:** servidor de hospedagem.
- **Node.js:** ambiente de execução do backend.
- **PM2:** gerenciamento do processo da aplicação.
- **NGINX:** proxy reverso.
- **GitHub Actions:** automação do deploy.
- **SSH:** acesso seguro ao servidor.

### Configuração da aplicação

No servidor, o projeto está localizado em:

```text
/opt/trampo-certo-devops-n3
```

A aplicação é gerenciada pelo PM2 com o nome:

```text
trampo-certo-n3
```

O backend utiliza a porta `3003` no ambiente de demonstração.

O NGINX encaminha as requisições HTTP do caminho `/trampo-certo/` para a interface disponibilizada pela aplicação Node.js.

### Ambiente de demonstração

O deploy utiliza:

```text
PORT=3003
DEMO_MODE=true
```

Nesse modo, a interface de demonstração funciona sem exigir conexão com o MongoDB Atlas.

### Aplicação publicada

**Endereço utilizado na validação:**

http://16.59.61.123/trampo-certo/

A página apresenta:

- Trampo Certo
- Hospitalidade sob demanda em Florianópolis
- Aplicação funcionando com sucesso!

**Resultado:** aplicação acessível pelo navegador e deploy automático validado.

**Observação:** o endereço público poderá mudar se a instância EC2 receber outro IP.

## 🔐 Segurança

As credenciais de conexão SSH utilizadas pelo pipeline de CD são armazenadas nos secrets do GitHub Actions:

- `EC2_HOST`
- `EC2_USER`
- `EC2_SSH_KEY`

Chaves privadas, senhas e credenciais de acesso não devem ser incluídas no repositório.

O arquivo `.env` deve permanecer fora do versionamento.

## 📊 Resultados da avaliação

| Requisito | Resultado |
|---|---|
| Repositório GitHub | Concluído |
| Branches de desenvolvimento | Concluído |
| Pull Request para `develop` | Concluído |
| Testes Jest e Supertest | 6 aprovados |
| Cobertura de código | Gerada |
| ESLint | Aprovado |
| Selenium | Aprovado |
| Workflow CI | Aprovado |
| Workflow CD | Aprovado |
| Deploy AWS EC2 | Concluído |
| Gerenciamento com PM2 | Funcionando |
| Proxy reverso NGINX | Funcionando |
| Acesso HTTP público | Validado |

## ✅ Conclusão

A avaliação N3 permitiu aplicar práticas de DevOps ao backend do projeto Trampo Certo.

Foram implementados testes automatizados, análise estática, controle de versões com branches e Pull Requests, pipelines de CI/CD com GitHub Actions e implantação automática na AWS EC2.

A aplicação foi disponibilizada por HTTP utilizando Node.js, PM2 e NGINX.

Os pipelines foram executados com sucesso, demonstrando a integração entre desenvolvimento, testes e implantação automatizada.

---

**Projeto acadêmico — UNICESUSC | ADS | DevOps N3 | 2026**
