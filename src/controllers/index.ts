import { Request, Response } from "express";

import nodemailer from 'nodemailer';
import { env } from "process";

// Configuración transportador NodeMailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: { user: process.env.FROM_EMAIL, pass: process.env.PASSWORD }
// });

// Configurar el transporter con las credenciales de Gmail
//@ts-ignore
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.FROM_EMAIL,
        accessToken: 'AIzaSyAB_TdIm9y7aypQZX-IjsQ0ELO-D2-6Oyg',
    },
});
/**
 * POST /
 * Home page.
 */
    export const sendEmail = async (req: Request, res: Response): Promise<void> => {
    //@ts-ignore
    const { fistName, lastName, email, message } = req.body as unknown as {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
    };

    const settingMessage = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        cc: process.env.DEV_EMAIL,
        subject: `👀 Info by ${fistName} ${lastName}`,
        text:  `
            Nombre: ${fistName} ${lastName}
            Correo: ${email}
            Mensaje: ${message}
        `,
    };

    await transporter.sendMail(settingMessage);

    //@ts-ignore
    res.status(200).json({
        success: true,
    });
};
