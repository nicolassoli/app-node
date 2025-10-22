const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo à minha aplicação Node.js!</h1>
    <p>Essa é a página inicial.</p>
    <a href="/sobre">Ir para Sobre</a> | <a href="/contato">Ir para Contato</a>
  `);
});

app.get('/sobre', (req, res) => {
  res.send(`
    <h1>Sobre</h1>
    <p>Essa é a página sobre. Aqui falo sobre o projeto.</p>
    <a href="/">Voltar</a>
  `);
});

app.get('/contato', (req, res) => {
  res.send(`
    <h1>Contato</h1>
    <p>Entre em contato pelo email: nicolas@unifor.com</p>
    <a href="/">Voltar</a>
  `);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});