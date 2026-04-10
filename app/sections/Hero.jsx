"use client";
import { motion } from "framer-motion";

export default function Hero() {
      return (
            <section className="text-center py-32">
                  <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-4"
                  >
                        Dịch vụ Online Uy Tín
                  </motion.h1>

                  <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 mb-6"
                  >
                        Thiệp mời online & Netflix giá tốt
                  </motion.p>

                  <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="#contact"
                        className="bg-purple-600 px-6 py-3 rounded-xl inline-block"
                  >
                        Liên hệ ngay
                  </motion.a>
            </section>
      );
}