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
      range: 'becomeachef',
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
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const menusICook = req.body.menusICook;
    const dailyorbulk = req.body.dailyorbulk;
    const location = req.body.location;

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
      range: 'becomeachef',
      valueInputOption: 'USER_ENTERED',
      auth: jwt,
      requestBody: {
        values: [
          [
            RefNo,
            name,
            email,
            phone,
            location,
            dailyorbulk,
            message,
            menusICook,
          ],
        ],
      },
    });
    const data = JSON.stringify(response);
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'jsafroze@gmail.com',
        pass: 'poyc zxzw pses quqf',
      },
    });

    // Prepare email message
    const mailOptions = {
      from: 'jsafroze@gmail.com',
      to: 'jsafroze@gmail.com',
      subject: 'New Chef Info Added',
      text: `${
        'Ticket: ' +
        dateTime +
        ',' +
        name +
        ',' +
        email +
        ',' +
        phone +
        ',' +
        location +
        ',' +
        dailyorbulk +
        message +
        menusICook
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
        dailyorbulk +
        message +
        menusICook
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
