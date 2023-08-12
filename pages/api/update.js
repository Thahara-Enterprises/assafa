import fs from 'fs';
import path from 'path';
import { apiUrl } from '../../config';

const baseUrl = `${apiUrl}/json`;

export default function handler(req, res) {
  if (req.method === 'PUT') {
    const filePath = path.join(process.cwd(), `/data.json`);

    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Update the value in the JSON data
    jsonData.dinner = req.body.menuData;
    console.log(jsonData);

    // Write the updated JSON data back to the file
    fs.writeFileSync(filePath, JSON.stringify(jsonData));

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
