import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-pink-500 to-yellow-400 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <Card className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8">
          <CardContent>
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-orange-400 mb-4">
                LumiEcom
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Твой старт в мир яркого e-commerce. Курс, который перевернёт твоё понимание онлайн-бизнеса.
              </p>
              <Button className="text-lg px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-full shadow-lg transition">
                Начать путь
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
