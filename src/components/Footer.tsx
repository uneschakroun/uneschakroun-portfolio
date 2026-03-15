import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto max-w-7xl px-6 py-8 sm:py-10 md:py-12">
        <div className="flex justify-center items-center">
          <div className="text-xs text-white/30 font-medium uppercase tracking-wider">
            <p>Worldwide Working from Morocco</p>
          </div>
        </div>
      </div>
    </footer>
  );
}