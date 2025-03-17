const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`); // コンソールにリクエスト情報を出力
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

