const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('./generated/client.ts'); 
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

const app = express();

const adapter = new PrismaBetterSqlite3({
  url: "file:C:/Users/leine/Downloads/leinell-portfolio-ready/prisma/dev.db"
});

const prisma = new PrismaClient({ adapter });

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newMessage = await prisma.contactMessage.create({
      data: { name, email, message }
    });

    res.status(201).json({ success: true, message: 'Message saved!', data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});