import nodemailer from "nodemailer";

export const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });
    let info = await transporter.sendMail({
      from: `JobHub || Job-Provider`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while sending mail", error);
  }
};
