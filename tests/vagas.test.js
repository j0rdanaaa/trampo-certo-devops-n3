
const request = require("supertest");
const app = require("../app");
const Vaga = require("../src/models/Vaga");

// Simular o modelo do MongoDB
jest.mock("../src/models/Vaga");

describe("Testes da API de Vagas", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Deve cadastrar uma vaga com sucesso", async () => {
    const novaVaga = {
      cargo: "Garçom",
      empresa: "Restaurante Floripa",
      valor: 150
    };

    // Simula o cadastro no banco de dados
    Vaga.create.mockResolvedValue({
      _id: "123",
      ...novaVaga
    });

    // Simula uma requisição POST
    const resposta = await request(app)
      .post("/api/vagas")
      .send(novaVaga);

    // Verifica o resultado
    expect(resposta.status).toBe(201);
    expect(resposta.body.cargo).toBe("Garçom");
    expect(resposta.body.empresa).toBe("Restaurante Floripa");
    expect(resposta.body.valor).toBe(150);
    expect(Vaga.create).toHaveBeenCalledWith(novaVaga);
  });

test("Deve listar todas as vagas cadastradas", async () => {
  const vagasSimuladas = [
    {
      _id: "1",
      cargo: "Garçom",
      empresa: "Restaurante Floripa",
      valor: 150
    },
    {
      _id: "2",
      cargo: "Cozinheiro",
      empresa: "Hotel Centro",
      valor: 200
    }
  ];

  // Simula a consulta ao MongoDB
  Vaga.find.mockResolvedValue(vagasSimuladas);

  // Realiza uma requisição GET
  const resposta = await request(app)
    .get("/api/vagas");

  // Verifica o resultado
  expect(resposta.status).toBe(200);
  expect(resposta.body).toHaveLength(2);
  expect(resposta.body[0].cargo).toBe("Garçom");
  expect(resposta.body[1].cargo).toBe("Cozinheiro");
  expect(Vaga.find).toHaveBeenCalledTimes(1);
});

test("Deve atualizar uma vaga com sucesso", async () => {
  const idVaga = "123";

  const dadosAtualizados = {
    cargo: "Bartender",
    empresa: "Bar Floripa",
    valor: 180
  };

  // Simula a atualização no MongoDB
  Vaga.findByIdAndUpdate.mockResolvedValue({
    _id: idVaga,
    ...dadosAtualizados
  });

  // Realiza uma requisição PUT
  const resposta = await request(app)
    .put(`/api/vagas/${idVaga}`)
    .send(dadosAtualizados);

  // Verifica o resultado
  expect(resposta.status).toBe(200);
  expect(resposta.body.mensagem).toBe(
    "Vaga atualizada com sucesso!"
  );
  expect(resposta.body.vaga.cargo).toBe("Bartender");
  expect(resposta.body.vaga.valor).toBe(180);

  // Confirma que o método do Mongoose foi chamado
  expect(Vaga.findByIdAndUpdate).toHaveBeenCalledWith(
    idVaga,
    dadosAtualizados,
    {
      new: true,
      runValidators: true
    }
  );
});

test("Deve excluir uma vaga com sucesso", async () => {
  const idVaga = "123";

  const vagaExcluida = {
    _id: idVaga,
    cargo: "Garçom",
    empresa: "Restaurante Floripa",
    valor: 150
  };

  // Simula a exclusão no MongoDB
  Vaga.findByIdAndDelete.mockResolvedValue(vagaExcluida);

  // Realiza uma requisição DELETE
  const resposta = await request(app)
    .delete(`/api/vagas/${idVaga}`);

  // Verifica se a exclusão foi bem-sucedida
  expect(resposta.status).toBe(200);

  expect(resposta.body.mensagem).toBe(
    "Vaga excluída com sucesso!"
  );

  // Confirma que o Mongoose recebeu o ID correto
  expect(Vaga.findByIdAndDelete).toHaveBeenCalledWith(idVaga);
});

test("Deve retornar 404 ao atualizar vaga inexistente", async () => {
  const idVaga = "507f1f77bcf86cd799439011";

  const dadosAtualizados = {
    cargo: "Recepcionista",
    empresa: "Hotel Floripa",
    valor: 180
  };

  // Simula uma vaga que não existe no banco
  Vaga.findByIdAndUpdate.mockResolvedValue(null);

  // Tenta atualizar a vaga
  const resposta = await request(app)
    .put(`/api/vagas/${idVaga}`)
    .send(dadosAtualizados);

  // Verifica se a API retorna 404
  expect(resposta.status).toBe(404);

  expect(resposta.body.mensagem).toBe(
    "Vaga não encontrada."
  );

  expect(Vaga.findByIdAndUpdate).toHaveBeenCalledTimes(1);
});

test("Deve retornar 400 ao cadastrar vaga com dados inválidos", async () => {
  const vagaInvalida = {
    cargo: "",
    empresa: "",
    valor: -50
  };

  // Simula um erro de validação do Mongoose
  const erroValidacao = new Error("Dados inválidos");
  erroValidacao.name = "ValidationError";

  Vaga.create.mockRejectedValue(erroValidacao);

  // Tenta cadastrar a vaga
  const resposta = await request(app)
    .post("/api/vagas")
    .send(vagaInvalida);

  // Verifica se a API retorna 400
  expect(resposta.status).toBe(400);
  expect(resposta.body.detalhe).toBe("Dados inválidos");
  expect(Vaga.create).toHaveBeenCalledWith(vagaInvalida);
});


});
