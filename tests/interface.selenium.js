const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function testarInterface() {
  let driver;

  try {
    // Configura o Chrome para rodar no GitHub Actions
    const options = new chrome.Options();

    options.addArguments(
      "--headless=new",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--window-size=1920,1080"
    );

    // Inicia o navegador Chrome
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    // Acessa a página do Trampo Certo
    await driver.get("http://localhost:3000/interface/");

    // Aguarda o título aparecer
    const titulo = await driver.wait(
      until.elementLocated(By.css("h1")),
      10000
    );

    const textoTitulo = await titulo.getText();

    if (textoTitulo !== "Trampo Certo") {
      throw new Error("Título da página incorreto!");
    }

    // Verifica a mensagem de funcionamento
    const status = await driver.findElement(By.id("status"));
    const textoStatus = await status.getText();

    if (textoStatus !== "Aplicação funcionando com sucesso!") {
      throw new Error("Mensagem de funcionamento incorreta!");
    }

    console.log("Teste Selenium passou com sucesso!");
  } finally {
    // Fecha o navegador
    if (driver) {
      await driver.quit();
    }
  }
}

testarInterface().catch((erro) => {
  console.error("Teste Selenium falhou:", erro.message);
  process.exitCode = 1;
});
