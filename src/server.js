import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.post('/contact', (req, res) => {
  const newEntry = req.body;
  fs.readFile('contact.json', 'utf8', (err, data) => {
    const entries = data ? JSON.parse(data) : [];
    entries.push(newEntry);
    fs.writeFile('contact.json', JSON.stringify(entries, null, 2), (err) => {
      if (err) return res.status(500).send({ message: 'Failed to save' });
      res.status(200).send({ message: 'Form saved' });
    });
  });
});
app.listen(5000, () => console.log('Server running...'));
