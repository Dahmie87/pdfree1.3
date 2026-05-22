import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Book, ChevronDown, Heart, Globe, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutAndSupportPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is PDFree really free?",
      answer: "Yes, 100%. PDFree is completely free with no hidden charges, paywalls, or freemium limitations. We generate PDFs for everyone equally.",
    },
    {
      question: "What happens to my data after I generate a PDF?",
      answer: "Your data is not stored on our servers. PDFs are generated, sent to you immediately, and deleted. We don't track, sell, or use your data for training AI models.",
    },
    {
      question: "How long does PDF generation take?",
      answer: "Typically 1-2 minutes depending on complexity and book length. We send real-time progress updates so you know what stage we're at.",
    },
    {
      question: "Can I customize the PDF format?",
      answer: "Yes! You can adjust page length, tone (temperature), number of chapters, and styling options before generation.",
    },
    {
      question: "Do I need an account to use PDFree?",
      answer: "No account required. However, creating one lets you save your generation history and customize your preferences.",
    },
    {
      question: "Can I use generated PDFs commercially?",
      answer: "Yes, all PDFs generated are yours to use however you want—personally, commercially, or however suits your needs.",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Response within 24 hours",
      contact: "support@pdfree.dev",
    },
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "Chat with other users",
      contact: "Join Discord",
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Self-serve help articles",
      contact: "View Docs",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "User-First Design",
      description: "We prioritize your needs over profit margins.",
    },
    {
      icon: Globe,
      title: "Truly Free",
      description: "No hidden paywalls, no freemium traps.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Your time matters. Optimized for speed.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built with feedback from real users.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Mission Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About PDFree</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Document creation shouldn't be a luxury. We're building powerful, free tools to democratize PDF generation and prove that great products don't require paywalls.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 border border-slate-200 bg-white hover:shadow-lg transition-all"
                >
                  <div className="bg-purple-100 p-3 rounded-xl w-fit mb-3">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How Can We Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-slate-200 bg-white"
                >
                  <div className="bg-purple-100 p-3 rounded-xl w-fit mx-auto mb-3">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{method.description}</p>
                  <a
                    href={method.contact.includes('@') ? `mailto:${method.contact}` : '#'}
                    className="text-purple-600 font-bold hover:text-purple-700 transition text-sm"
                  >
                    {method.contact}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50/50 transition"
                >
                  <h3 className="font-bold text-slate-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === idx ? 'auto' : 0,
                    opacity: openFAQ === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-slate-600 border-t border-slate-200 pt-4 text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl p-8 border border-slate-200 bg-white shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h2>
          <p className="text-slate-600 mb-6">Send a direct message if your question is not covered above.</p>

          <form className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
            <textarea
              rows={5}
              placeholder="Tell us what you need help with..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
            <button
              type="submit"
              className="justify-self-start px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl p-10 bg-purple-50 border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start?</h3>
          <p className="text-slate-600 mb-6">No account required. Start generating PDFs instantly.</p>
          <Link
            to="/generate"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all"
          >
            Start Generating Free
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutAndSupportPage;
