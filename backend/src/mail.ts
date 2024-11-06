import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailTransport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendOTPEmail = async (email: string, otp: number) => {
  const mailOptions = {
    from: "no-replay@try.com",
    to: email,
    subject: "OTP reset password",
    text: `OTPnya ${otp}`,
  };

  return await mailTransport.sendMail(mailOptions);
};

export default sendOTPEmail;
