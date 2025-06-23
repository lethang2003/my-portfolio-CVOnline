"use client";

import { useEffect, useState } from "react";
import { getCV, CV } from "@/lib/api";
import CVContent from "@/components/CVContent";
import CVDocument from "@/components/CVDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const [cv, setCv] = useState<CV | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getCV();
      setCv(data);
    }
    fetchData();
  }, []);

  if (!cv) return <div className="text-center mt-10">Đang tải CV...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Icon tải PDF đặt trung tâm đầu trang */}
      <div className="flex justify-center mb-6">
        <PDFDownloadLink document={<CVDocument cv={cv} />} fileName="cv.pdf">
          {({ loading }) =>
            loading ? (
              <Download className="w-6 h-6 text-gray-400 animate-pulse" />
            ) : (
              <Download className="w-6 h-6 text-blue-600 hover:text-blue-800 transition cursor-pointer" />
            )
          }
        </PDFDownloadLink>
      </div>

      {/* Nội dung CV */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CVContent cv={cv} />
        <ContactForm/>
      </motion.div>
    </div>
  );
}
