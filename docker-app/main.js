const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    return res.json({ message: "Hello Node from container v2" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));