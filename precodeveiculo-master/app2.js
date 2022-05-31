const https = require("https");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
console.log ('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas')


const req = https.get(
  "https://parallelum.com.br/fipe/api/v1/caminhoes/marcas",
  (res) => {
    res.setEncoding("utf8");
    res.on("data", function (data) {
      const marcas = JSON.parse(data);
      marcas.forEach((marca) => {
        https.get(
          `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marca.codigo}/modelos`,
          async (res) => {
            await sleep(1000); // PRECISA ESPERAR UM SEGUNDO PRA API NÃO DAR BLOCK
            res.setEncoding("utf8");
            res.on("data", function (data) {
              const result = JSON.parse(data);
              console.log(`MODELOS DO CAMINHÃO ${marca.nome}`);
              console.log(result.modelos);
              console.log(`ANOS DO CAMINHÃO ${marca.nome}`);
              console.log(result.anos);
            });
          }
        );
      });
    });
  }
);
