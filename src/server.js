'use strict';

const express = require('express'),
	  path = require('path'),
	  app = express();
	  require('env');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.thml'));
});

app.listen(port);