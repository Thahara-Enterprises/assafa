import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message, phone } = req.body;

  // Create a Nodemailer transporter
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
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while sending the email');
  }
}
