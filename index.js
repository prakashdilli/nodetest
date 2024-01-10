// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const myEnvVar = process.env.dbconnectionstring || 'Environment variable not set';
    res.send(`Environment Variable: ${myEnvVar} and the Port is ${port}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
