import { Injectable } from '@nestjs/common';
import { CV } from './schemas/cv.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CVService {
  constructor(@InjectModel(CV.name) private cvModel: Model<CV>) {}

  async create(data: Partial<CV>): Promise<CV> {
    return this.cvModel.create(data);
  }

  async findAll(): Promise<CV[]> {
    return this.cvModel.find();
  }

  async findOne(id: string): Promise<CV | null> {
    return this.cvModel.findById(id);
  }

  async update(id: string, data: Partial<CV>): Promise<CV | null> {
    return this.cvModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.cvModel.findByIdAndDelete(id);
  }
}
