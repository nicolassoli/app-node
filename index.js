const express = require('express');
const app = express();
const port = 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo à minha aplicação Node.js!</h1>
    <p>Essa é a página inicial.</p>
    <a href="/sobre">Ir para Sobre</a> | <a href="/contato">Ir para Contato</a>
  `);
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
  res.send(`
    <h1>Sobre</h1>
    <p>Essa é a página sobre. Aqui falo sobre o projeto.</p>
    <a href="/">Voltar</a>
  `);
});

// Rota 3: Contato
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