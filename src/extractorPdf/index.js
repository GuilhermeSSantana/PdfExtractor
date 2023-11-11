const multer = require('multer');
const pdfParse = require('pdf-parse');
const upload = multer();
const express = require('express');
const pdf = express.Router();


pdf.post('/pdf-upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo PDF enviado.' });
    }

    const buffer = req.file.buffer;
    const data = await pdfParse(buffer);

    return res.json({ textoExtraido: data.text });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao extrair dados do PDF.' });
  }
})

module.exports = pdf;