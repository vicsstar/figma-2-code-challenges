const express = require('express');
const app = express();

app.use(express.static('web'));

const port = 3000;

app.listen(
    port,
    () => console.log(`Simple Card app listening on port ${port}`)
);
