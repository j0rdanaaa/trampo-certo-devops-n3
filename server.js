require("dotenv").config();

const dns = require("node:dns");
const app = require("./app");
const conectarBanco = require("./src/config/database");

// Configuração de DNS para o MongoDB Atlas
dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

const PORT = process.env.PORT || 3000;

// Permite iniciar a interface sem MongoDB
const modoDemonstracao = process.env.DEMO_MODE === "true";

const iniciarServidor = async () => {
  try {
    if (modoDemonstracao) {
      console.log("Modo demonstração: MongoDB desativado.");
    } else {
      await conectarBanco();
    }

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error("Não foi possível iniciar a API:", erro.message);
    process.exit(1);
  }
};

iniciarServidor();
