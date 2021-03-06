const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);