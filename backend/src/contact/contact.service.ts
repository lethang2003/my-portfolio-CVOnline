// src/contact/contact.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  async sendContactEmail(dto: CreateContactDto): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // hoặc 'smtp.ethereal.email' để test
      auth: {
        user: process.env.MAIL_USER, // email của bạn
        pass: process.env.MAIL_PASS, // mật khẩu ứng dụng (App Password nếu Gmail)
      },
    });

    await transporter.sendMail({
      from: `"${dto.name}" <${dto.email}>`,
      to: process.env.MAIL_TO, // email nhận (thường là bạn)
      subject: 'Liên hệ từ Website CV Online',
      text: dto.message,
      html: `<p><strong>Tên:</strong> ${dto.name}</p>
             <p><strong>Email:</strong> ${dto.email}</p>
             <p><strong>Nội dung:</strong><br/>${dto.message}</p>`,
    });
  }
}
