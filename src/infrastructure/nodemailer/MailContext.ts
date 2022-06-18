import { injectable } from 'inversify'
import { createTransport, Transporter } from 'nodemailer'
import SMTPTransport = require('nodemailer/lib/smtp-transport')

@injectable()
class MailContext {
    private transport: Transporter
    constructor() {
        this.transport = createTransport({
            name: "gmail",
            port: 465,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
    }
}

export default MailContext
