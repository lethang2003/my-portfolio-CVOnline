'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

const schema = z.object({
  fullName: z.string().min(1),
  position: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function AdminForm({ defaultValues }: { defaultValues: FormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues
  });

  const onSubmit = async (data: FormData) => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await axios.patch(`${API_URL}/cv/your-id`, data);
    alert('Cập nhật thành công!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
      <input {...register("fullName")} placeholder="Họ tên" className="input" />
      <p className="text-red-500 text-sm">{errors.fullName?.message}</p>

      <input {...register("position")} placeholder="Vị trí" className="input" />
      <p className="text-red-500 text-sm">{errors.position?.message}</p>

      <input {...register("email")} placeholder="Email" className="input" />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <input {...register("phone")} placeholder="Số điện thoại" className="input" />
      <p className="text-red-500 text-sm">{errors.phone?.message}</p>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Cập nhật</button>
    </form>
  );
}
