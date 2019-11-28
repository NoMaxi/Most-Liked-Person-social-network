const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

app.use(
  express.static(
    path.join(__dirname, 'dist/social-network')
  )
);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'dist/social-network/index.html')
  );
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log('running', port);
});
