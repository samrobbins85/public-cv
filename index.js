// const puppeteer = require("puppeteer");
// var path = require("path");
// (async () => {
//   const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
//   const page = await browser.newPage();
//   await page.goto(`file:${path.join(__dirname, "public/index.html")}`, {
//     waitUntil: "networkidle2",
//   });
//   await page.evaluate(() => {
//     let example = document.querySelector("#pdf_link");

//     example.parentNode.removeChild(example);
//   });

//   await page.pdf({ path: "public/cv.pdf", format: "A4", scale: 0.9 });

//   await browser.close();
// })();
const puppeteer = require("puppeteer");
const handler = require("serve-handler");
const http = require("http");
(async () => {
  const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options
    return handler(request, response, { public: "public" });
  });

  server.listen(3000, () => {
    console.log("Running at http://localhost:3000");
  });
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
  });
  await page.evaluate(() => {
    let example = document.querySelector("#pdf_link");

    example.parentNode.removeChild(example);
  });

  await page.pdf({ path: "public/cv.pdf", format: "A4" });
  await browser.close();
  await server.close();
})();
