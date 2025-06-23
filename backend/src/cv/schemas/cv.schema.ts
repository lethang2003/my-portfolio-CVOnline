// src/cv/schemas/cv.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CV extends Document {
  @Prop() fullName: string;
  @Prop() nickName: string;
  @Prop() position: string;
  @Prop() address: string;
  @Prop() email: string;
  @Prop() phone: string;
  @Prop() github: string;
  @Prop() aboutMe: string;
  @Prop([String]) softSkills: string[];
  @Prop([String]) programmingLanguages: string[];
  @Prop([String]) markupLanguages: string[];
  @Prop([String]) frontend: string[];
  @Prop([String]) backend: string[];
  @Prop([String]) database: string[];
  @Prop([String]) devopsTools: string[];
  @Prop([String]) uiux: string[];
  @Prop([String]) others: string[];
  @Prop() education: string;
  @Prop() experience: string;
  @Prop([{ name: String, github: String, link: String, description: String, technologies: [String] }])
  projects: any[];
  @Prop() languageSkill: string;
  @Prop() teamwork: string;
  @Prop() problemSolving: string;
  @Prop()
  avatar?: string;

}

export const CVSchema = SchemaFactory.createForClass(CV);
