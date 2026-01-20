"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Gem } from "lucide-react";

export default function SulawesiOnboarding() {
  const [step, setStep] = useState(0);

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 font-plus-jakarta mt-10">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="intro"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl w-full bg-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-accent/20 flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="md:w-1/3 bg-(--color-primary)/10 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent-gold rounded-full -translate-x-16 -translate-y-16 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent rounded-full translate-x-16 translate-y-16 blur-3xl"></div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/Sulawesi/game1/Thinking.png"
                  alt="Thinking Mascot"
                  width={300}
                  height={300}
                  className="relative z-10 object-contain"
                />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-(--color-primary) mb-6">
                Jelajahi Pulau Sulawesi
              </h1>
              <div className="space-y-4 text-(--color-foreground)/80 leading-relaxed mb-8">
                <p>
                  Sulawesi, pulau berbentuk unik seperti anggrek, adalah rumah
                  bagi keragaman budaya yang luar biasa. Dari filosofi{" "}
                  <span className="text-accent-gold font-bold italic">
                    Siri'
                  </span>{" "}
                  yang menjunjung tinggi kehormatan diri dalam budaya
                  Bugis-Makassar, hingga tradisi pemakaman megah{" "}
                  <span className="text-accent-gold font-bold italic">
                    Rambu Solo'
                  </span>{" "}
                  dari Toraja.
                </p>
                <p>
                  Pulau ini juga dikenal dengan kapal{" "}
                  <span className="text-accent-gold font-bold italic">
                    Phinisi
                  </span>{" "}
                  yang legendaris, simbol kejayaan maritim Nusantara. Mari kita
                  pelajari lebih dalam tentang kekayaan bahasa, budaya, dan
                  warisan Sulawesi melalui permainan yang seru!
                </p>
              </div>

              <button
                onClick={() => setStep(1)}
                className="w-full md:w-max px-8 py-4 bg-(--color-primary) text-background rounded-full font-bold hover:bg-secondary transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
              >
                Mulai Petualangan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="games"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-6xl w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-(--color-primary) mb-4">
                Pilih Permainanmu
              </h2>
              <p className="text-(--color-foreground)/70 max-w-2xl mx-auto">
                Dua permainan seru menantimu untuk mengenal lebih dekat budaya
                Sulawesi yang kaya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Game 1 Card - Jelajah Kata */}
              <Link href="/Sulawesi/game1" className="group">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-accent/20 shadow-xl group-hover:shadow-2xl transition-all h-full flex flex-col items-center text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Image
                      src="/assets/Sulawesi/game1/FaceWin.png"
                      alt="Mascot"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-24 h-24 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen size={48} className="text-(--color-primary)" />
                  </div>

                  <h3 className="text-2xl font-cormorant font-bold text-(--color-primary) mb-4">
                    Jelajah Kata
                  </h3>
                  <p className="text-(--color-foreground)/70 mb-8 grow text-sm leading-relaxed">
                    Uji kemampuanmu menebak kata-kata unik dari bahasa Bugis,
                    Makassar, dan Toraja melalui permainan kartu yang seru!
                  </p>
                  <span className="px-6 py-2 bg-(--color-primary) text-background rounded-full text-sm font-bold group-hover:bg-accent-gold transition-colors">
                    Main Sekarang
                  </span>
                </motion.div>
              </Link>

              {/* Game 2 Card - Jejak Warisan */}
              <Link href="/Sulawesi/game2" className="group">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-accent/20 shadow-xl group-hover:shadow-2xl transition-all h-full flex flex-col items-center text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Image
                      src="/assets/Sulawesi/game1/FaceWin.png"
                      alt="Mascot"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-24 h-24 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Gem size={48} className="text-(--color-primary)" />
                  </div>

                  <h3 className="text-2xl font-cormorant font-bold text-(--color-primary) mb-4">
                    Jejak Warisan
                  </h3>
                  <p className="text-(--color-foreground)/70 mb-8 grow text-sm leading-relaxed">
                    Seberapa kenal kamu dengan benda pusaka dan adat Sulawesi?
                    Cocokkan gambar dengan nama yang tepat!
                  </p>
                  <span className="px-6 py-2 bg-(--color-primary) text-background rounded-full text-sm font-bold group-hover:bg-accent-gold transition-colors">
                    Main Sekarang
                  </span>
                </motion.div>
              </Link>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setStep(0)}
              className="mt-12 mx-auto block text-(--color-primary) hover:underline font-bold"
            >
              ← Kembali ke Penjelasan
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
