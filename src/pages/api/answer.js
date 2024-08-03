import fs from 'fs';
import path from 'path';
const levenshtein = require('js-levenshtein');

export default function handler(req, res) {
  const { question } = req.query;

  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  const lowerCaseQuestion = question.toLowerCase();

  let bestMatch = data[0];
  let bestDistance = levenshtein(lowerCaseQuestion, data[0].question.toLowerCase());

  data.forEach(item => {
    const distance = levenshtein(lowerCaseQuestion, item.question.toLowerCase());
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = item;
    }
  });

  if (bestDistance <= 3) {
    res.status(200).json({ answer: bestMatch.answer });
  } else {
    res.status(404).json({ answer: 'Pertanyaan tidak ditemukan.' });
  }
}