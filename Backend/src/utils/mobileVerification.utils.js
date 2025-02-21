// import { Vonage } from "@vonage/server-sdk";
// const vonage = new Vonage({})

// export const otpSender = async (otp, mobileNumber) => {
//   try {
//     await vonage.sms.send({
//       to: `${mobileNumber}`,
//       from: process.env.myNumber,
//       text: `Welcome to JobHub and your otp is ${otp}`,
//     });
//   } catch (error) {
//     throw new Error("Otp Sender Function Error", error);
//   }
// };

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
import twilio from "twilio";
const client = twilio(accountSid, authToken);

export const otpSender = async (otp, mobileNumber) => {
  try {
    await client.messages.create({
      body: `${otp} is your otp for JobHub verification. It will expire in 5 minutes`,
      to: mobileNumber,
      from: process.env.myNumber,
    });
  } catch (error) {
    console.log("Something went wrong while sending otp", error)
  }
};
