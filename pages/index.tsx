import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-pink-500 to-yellow-400 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-10 text-center"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-orange-400 mb-4">
          LumiEcom
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Твой старт в мир яркого e-commerce. Курс, который перевернёт твоё понимание онлайн-бизнеса.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-900 transition"
        >
          Начать путь
        </a>
      </motion.div>
    </main>
  );
}

