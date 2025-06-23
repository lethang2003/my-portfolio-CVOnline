// src/contact/contact.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async sendContact(@Body() dto: CreateContactDto) {
    await this.contactService.sendContactEmail(dto);
    return { success: true, message: 'Email đã được gửi thành công!' };
  }
}
