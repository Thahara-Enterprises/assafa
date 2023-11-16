import { google } from 'googleapis';
const sheets = google.sheets('v4');
import nodemailer from 'nodemailer';

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
    const meal = req.body.meal;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.DAILY_MEAL_DATABASE_ID,
      range: 'subscription',
      valueInputOption: 'USER_ENTERED',
      auth: jwt,
      requestBody: {
        values: [[RefNo, name, email, phone, location, mealPlan, fromDate, toDate]],
      },
    });
    const data = JSON.stringify(response);
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'jsafroze@gmail.com',
        pass: process.env.PASS,
      },
    });

    // Prepare email message
    const mailOptions = {
      from: 'jsafroze@gmail.com',
      to: 'jsafroze@gmail.com',
      subject: 'New Order Received',
      text: `${
        'Ticket: ' +
        dateTime +
        '\n' +
        name +
        '\n' +
        email +
        '\n' +
        phone +
        '\n' +
        location +
        '\n' +
        'Monthly/Weekly Subscription:' +
        mealPlan +
        '\n' +
        'Meal:' +
        meal +
        '\n' +
        'From Date: ' +
        fromDate +
        '\n' +
        'To Date: ' +
        toDate +
        '\n'
      }`,
    };
    const mailOpt = {
      from: 'jsafroze@gmail.com',
      to: `${email}`,
      subject: 'Assafa Delicacy | Your Order is Under Review',
      text: `${
        'Ticket: ' +
        Date.now +
        Timestamp +
        ',' +
        name +
        ',' +
        email +
        ',' +
        phone +
        ',' +
        location +
        ',' +
        'Meal Subscription:' +
        mealPlan
      }`,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOpt);

    res.status(201).json(data);
  } else {
    res.status(200).json({ message: 'error' });
  }
  // Create a Nodemailer transporter
}

export default handler;
