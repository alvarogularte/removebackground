const express = require('express');
const acessoRouter = require('./routes/acessosRoute');
const removeBackgroundRouter = require('./routes/removerBackgroundRoute')

const app = express();

app.use(express.json());

app.use('routes/acessosRoute', acessoRouter);
app.use('routes/removerBackgroundRoute', removeBackgroundRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
