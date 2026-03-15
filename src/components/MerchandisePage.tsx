import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

interface MerchandisePageProps {
  onBack: () => void;
}

const collections = [
  {
    title: 'Limited Edition',
    category: 'Premium Apparel',
    year: '2024',
    description: 'Exclusive capsule collection crafted with the finest materials and attention to detail.',
    image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHQtc2hpcnQlMjBkZXNpZ258ZW58MXx8fHwxNzY0Nzc3NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'SAR 299'
  },
  {
    title: 'Streetwear Collection',
    category: 'Urban Fashion',
    year: '2024',
    description: 'Bold designs merging contemporary street culture with premium quality.',
    image: 'https://images.unsplash.com/photo-1657364890927-5dd04b231a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHQtc2hpcnQlMjBtb2NrdXB8ZW58MXx8fHwxNzY0NzE0OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'SAR 349'
  },
  {
    title: 'Corporate Merchandise',
    category: 'Brand Products',
    year: '2024',
    description: 'Sophisticated corporate gifts and branded merchandise for premium clients.',
    image: 'https://images.unsplash.com/photo-1596488366811-156aaaddc5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBhcmVsJTIwbWVyY2hhbmRpc2V8ZW58MXx8fHwxNzY0Nzc3NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'Custom Quote'
  },
  {
    title: 'Designer Hoodies',
    category: 'Premium Outerwear',
    year: '2023',
    description: 'Luxe comfort meets distinctive design in our signature hoodie collection.',
    image: 'https://images.unsplash.com/photo-1621027212913-da785ebe2bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBkZXNpZ258ZW58MXx8fHwxNzY0Nzc3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'SAR 499'
  },
  {
    title: 'Minimalist Series',
    category: 'Clean Aesthetics',
    year: '2023',
    description: 'Less is more. Refined designs for the discerning minimalist.',
    image: 'https://images.unsplash.com/photo-1628054279790-a7c28596fa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdGVlJTIwc2hpcnR8ZW58MXx8fHwxNzY0Nzc3NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'SAR 279'
  },
  {
    title: 'Heritage Collection',
    category: 'Cultural Fusion',
    year: '2023',
    description: 'Celebrating Middle Eastern heritage through contemporary design language.',
    image: 'https://images.unsplash.com/photo-1611099655360-82662f0b59a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwc2hpcnR8ZW58MXx8fHwxNzY0NzA5OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'SAR 399'
  }
];

export function MerchandisePage({ onBack }: MerchandisePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-32"
    >
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/60 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-light">Back to Home</span>
        </button>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-white/40 uppercase tracking-[0.3em] mb-4 block">03.</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 font-display leading-[1.1]">
              Merchandise
            </h1>
            <p className="text-xl text-white/60 font-light max-w-3xl leading-relaxed">
              Transforming brands into wearable art. Premium apparel and products 
              that extend your brand identity into everyday life.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-white/10 mb-20"
        >
          <div>
            <ShoppingBag className="w-8 h-8 text-white/20 mb-4" />
            <div className="text-lg font-light mb-2">Premium Quality</div>
            <div className="text-sm text-white/40 font-light leading-relaxed">
              Curated materials and craftsmanship that match your brand standards.
            </div>
          </div>
          <div>
            <ShoppingBag className="w-8 h-8 text-white/20 mb-4" />
            <div className="text-lg font-light mb-2">Custom Design</div>
            <div className="text-sm text-white/40 font-light leading-relaxed">
              Bespoke merchandise tailored to your brand identity and values.
            </div>
          </div>
          <div>
            <ShoppingBag className="w-8 h-8 text-white/20 mb-4" />
            <div className="text-lg font-light mb-2">Sustainable</div>
            <div className="text-sm text-white/40 font-light leading-relaxed">
              Eco-conscious production methods and ethically sourced materials.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6 bg-zinc-900">
                <div className="aspect-[3/4]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="text-sm mb-2">View Collection</div>
                    <div className="text-2xl font-light">{item.price}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-1 group-hover:text-white/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/40">{item.category}</p>
                  </div>
                  <span className="text-sm text-white/30">{item.year}</span>
                </div>

                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto max-w-7xl px-6 mt-32">
        <div className="border border-white/10 p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-4 font-display">
            Custom Merchandise Design
          </h3>
          <p className="text-white/60 font-light mb-8 max-w-2xl mx-auto">
            Need branded merchandise for your company or event? We create bespoke solutions 
            tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 font-light">
            Request a Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}
