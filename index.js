const puppeteer = require("puppeteer");
var readlineSync = require("readline-sync");

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const coinbase = readlineSync.question("Informe a moeda base: ") || `dolar`;
  const coinfinal = readlineSync.question("Informe a moeda final: ") || `real`;

  const url = `https://www.google.com/search?q=${coinbase}+para+${coinfinal}`;
  await page.goto(url);

  const result = await page.evaluate(() => {
    return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
  });

  await browser.close();

  console.log(`O valor de 1 ${coinbase} em ${coinfinal} é: ${result}`);
}

robo();
