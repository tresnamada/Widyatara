"use client";
import { useState } from "react";
import HeroPage from "@/app/HeroPage";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="w-full min-h-screen relative">
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <HeroPage />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}
