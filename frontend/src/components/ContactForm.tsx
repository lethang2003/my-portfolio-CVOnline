'use client';
import { useState } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { message } from 'antd';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post('https://my-portfolio-be-t5nf.onrender.com/contact', form);
      setSent(true);
      // message.success('✅ Thank you! I will contact you soon..');
      setForm({ name: '', email: '', message: '' });
    } catch {
      message.error('Send failed, try again later!');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      
      {/* Tiêu đề */}
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg mb-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <Send className="w-6 h-6" />
        <h2 className="text-2xl font-bold tracking-tight">Contact with me</h2>
        
      </div>

      {/* Glass Section */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl"></div>
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:bg-white/50 transition-all duration-300 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/70 backdrop-blur placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Example: Lê Phan Hùng Thắng"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/70 backdrop-blur placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Example: hntn3221@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/70 backdrop-blur placeholder-gray-400 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Example: I would like to contact you about the project..."
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            disabled={sending}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >
            {sending ? 'Sending...' : sent ? 'already sent!' : 'Send contact'}
            {!sent && <Send className="w-4 h-4" />}
          </motion.button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 mt-3 font-medium"
            >
              ✅ Thank you! I will contact you soon..
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
