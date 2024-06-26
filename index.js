const express = require('express');
const gptRoute = require('./routes/gpt');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/gpt', gptRoute);

app.listen(port, () => {
  console.log(`Servidor iniciado. Faça um POST para: http://localhost:${port}/api/gpt`);
});
