const puppeteer = require("puppeteer");
var path = require("path");
(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(`file:${path.join(__dirname, "public/index.html")}`, {
    waitUntil: "networkidle2",
  });
  await page.evaluate(() => {
    let example = document.querySelector("#pdf_link");

    example.parentNode.removeChild(example);
  });

  await page.pdf({ path: "public/cv.pdf", format: "A4", scale: 0.8 });

  await browser.close();
})();
