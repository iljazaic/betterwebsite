const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});
app.get('/projects/:projectName', (req, res) => {
    const name = req.params.projectName;
    const p = path.join(__dirname, 'public', 'pages', 'project_page.html')

    res.sendFile(p);
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
