import { motion } from 'motion/react';
import { Mode } from '../App';

interface FooterProps {
  mode: Mode;
}

export function Footer({ mode }: FooterProps) {
  const isMotion = mode === 'motion';

  return (
    <footer className={`border-t transition-colors duration-700 ${
      isMotion ? 'border-black/20' : 'border-white/10'
    } mt-12 sm:mt-16 md:mt-20`}>
      <div className="container mx-auto max-w-7xl px-6 py-8 sm:py-10 md:py-12">
        <div className="flex justify-center items-center">
          <div className={`text-xs font-medium uppercase tracking-wider transition-colors duration-700 ${
            isMotion ? 'text-black/40' : 'text-white/30'
          }`}>
            <p>All Rights Reserved © Younes Chakroun</p>
          </div>
        </div>
      </div>
    </footer>
  );
}