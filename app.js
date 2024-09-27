const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Utilisation des routes définies dans routes.js
app.use('/', routes);

// Configuration du port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});