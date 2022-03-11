// @ts-check

const hapi = require('@hapi/hapi');
const routes = require('./routes');

async function main() {
  const server = hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    port: 3000,
  });

  server.route(routes);

  await server.start().then(() => {
    console.log(`app starts at port ${server.info.port}`);
  });
}

main();
