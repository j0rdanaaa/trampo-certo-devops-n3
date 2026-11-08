const express = require("express");
const cors = require("cors");
const path = require("node:path");

// Importar as rotas
const vagaRoutes = require("./src/routes/vagaRoutes");
const profissionalRoutes = require("./src/routes/profissionalRoutes");

const app = express();

// Permitir requisições do Front-End React
app.use(cors({
  origin: "http://localhost:5174"
}));

// Permitir receber dados JSON
app.use(express.json());
// Disponibilizar a página HTML para o Selenium
app.use("/interface", express.static(path.join(__dirname, "public")));

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    mensagem: "API Trampo Certo funcionando!"
  });
});

// Rotas do CRUD de vagas
app.use("/api/vagas", vagaRoutes);

// Rotas do CRUD de profissionais
app.use("/api/profissionais", profissionalRoutes);

// Exportar o Express para os testes
module.exports = app;
