import meal from '/data.json';
import fs from 'fs';
import path from 'path';
const fsp = require('fs').promises;

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), `/data.json`);

    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Do stuff
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error reading data' });
  }
}
