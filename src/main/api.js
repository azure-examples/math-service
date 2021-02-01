const Express = require('express');

const app = Express();
app.use(require('./resources/add'));

app.listen(8080);
