// src/contact/dto/create-contact.dto.ts


import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContactDto {
    
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
