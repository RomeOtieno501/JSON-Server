const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Reference to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Listen on port 3000 locally or the port provided by Render
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});

