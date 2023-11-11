const express = require("express");
const app = express();
const pdf = require("./extractorPdf/index");

app.use(express.json());
app.use(pdf);

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor escutando na porta ${porta}`);
});


