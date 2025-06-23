'use client';

import { useEffect, useState } from 'react';
import { getCV, CV } from '@/lib/api';
import AdminForm from '@/components/AdminForm';

export default function AdminPage() {
  const [cv, setCv] = useState<CV | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getCV();
      setCv(data);
    }
    fetchData();
  }, []);

  if (!cv) return <div className="text-center mt-10">Đang tải dữ liệu...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛠️ Chỉnh sửa CV</h1>
      <AdminForm defaultValues={cv} />
    </div>
  );
}
