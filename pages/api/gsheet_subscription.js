import { google } from 'googleapis';
const sheets = google.sheets('v4');

async function handler(req, res) {
  if (req.method === 'POST') {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
    const jwt = new google.auth.JWT(
      process.env.DAILY_MEAL_CLIENT_EMAIL,
      null,
      process.env.DAILY_MEAL_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes,
      null
    );

    const readData = await sheets.spreadsheets.values.get({
      auth: jwt,
      spreadsheetId: process.env.DAILY_MEAL_DATABASE_ID,
      range: 'subscription',
    });
    console.log(readData.data.values);

    const today = new Date();
    const thisYear = today.getFullYear();
    const RefNo =
      thisYear.toString().substring(2) +
      '000' +
      (readData.data.values.length + 1);
    const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const location = req.body.location;
    const mealPlan = req.body.message;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.DAILY_MEAL_DATABASE_ID,
      range: 'subscription',
      valueInputOption: 'USER_ENTERED',
      auth: jwt,
      requestBody: {
        values: [[RefNo, name, email, phone, location, mealPlan]],
      },
    });
    const data = JSON.stringify(response);
    res.status(201).json(data);
  } else {
    res.status(200).json({ message: 'error' });
  }
}

export default handler;
