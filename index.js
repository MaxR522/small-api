const app = require('./_app');
const config = require('./src/config');

app.listen(config.port, () => {
  console.log(
    `Server :: application is running @ 'http://localhost:${config.port}' ! 🎉 `,
  );
});
