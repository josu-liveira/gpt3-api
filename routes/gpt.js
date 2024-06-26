const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.post('/', (req, res) => {
  const { prompt } = req.body;
  const pythonPath = 'C:\\Users\\josuesilva\\AppData\\Local\\Programs\\Python\\Python312\\python.exe'; // Caminho atualizado com barras normais

  exec(`"${pythonPath}" gpt_client.py "${prompt}"`, { encoding: 'utf-8' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro: ${error.message}`);
      return res.status(500).send('Erro ao se comunicar com o gpt4free');
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send('Erro ao se comunicar com o gpt4free');
    }

    res.send(stdout.trim());
  });
});

module.exports = router;
