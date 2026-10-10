const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 🚀 Welcome to  Node.js application. Exploring Jenkins CI/CD, Git webhooks, and automated deployment with the 18 May DevOps batch!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
