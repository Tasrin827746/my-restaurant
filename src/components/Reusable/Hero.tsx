'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  showForks?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  tagline,
  backgroundImage,
  showForks = false,
}: HeroSectionProps) => {
  return (
    <motion.section
      className="relative w-full h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        {/* Optional Forks */}
        {showForks && (
          <>
            <motion.div
              className="absolute left-5 top-1/2 -translate-y-1/2 hidden md:block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image src="/left-fork.png" alt="Left Fork" width={300} height={150} />
            </motion.div>

            <motion.div
              className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:block"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="-scale-x-100">
                <Image src="/left-fork.png" alt="Right Fork" width={300} height={150} />
              </div>
            </motion.div>
          </>
        )}

        {/* Heading */}
        <motion.h1
          className="text-white text-6xl md:text-8xl font-bold font-serif mb-4"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}<span className="text-primary">.</span>
        </motion.h1>
        <img src="/divider.png" alt="" className='h-16'/>
        <motion.p
          className="text-primary text-xl md:text-2xl mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="text-lg md:text-xl text-gray-100 border-t border-b border-gray-300 py-2 px-4 mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {tagline}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
