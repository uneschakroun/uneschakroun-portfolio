import { useState, useEffect } from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { X, Move } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { motion } from 'motion/react';

interface DraggableCardProps {
  id: string;
  title: string;
  content: string[];
  initialX: number;
  initialY: number;
  color: string;
}

function DraggableCard({ id, title, content, initialX, initialY, color }: DraggableCardProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        setPosition({
          x: position.x + delta.x,
          y: position.y + delta.y,
        });
      }
    },
  }));

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      className={`bg-black border-2 ${color} p-6 min-w-[280px] max-w-[400px] backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Move className="w-4 h-4 text-cyan-400" />
          <h3 className="text-lg">
            <GlitchText>{title}</GlitchText>
          </h3>
        </div>
      </div>
      <div className="space-y-2">
        {content.map((line, idx) => (
          <p key={idx} className="text-white/80 text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

interface StaticCardProps {
  title: string;
  content: string[];
  color: string;
}

function StaticCard({ title, content, color }: StaticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-black border-2 ${color} p-4 md:p-6 w-full`}
    >
      <h3 className="text-base md:text-lg mb-3 md:mb-4">
        <GlitchText>{title}</GlitchText>
      </h3>
      <div className="space-y-2">
        {content.map((line, idx) => (
          <p key={idx} className="text-white/80 text-xs md:text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

interface InteractiveResumeProps {
  onClose: () => void;
}

export function InteractiveResume({ onClose }: InteractiveResumeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cvElements = [
    {
      id: 'personal',
      title: 'Personal Info',
      content: [
        'Younes Chakroun',
        'Designer & Creative',
        'uneschakroun@gmail.com',
      ],
      initialX: 50,
      initialY: 50,
      color: 'border-cyan-400',
    },
    {
      id: 'experience',
      title: 'Experience',
      content: [
        'Brand Designer - 2020-Present',
        'Creating unique brand identities',
        'Visual design systems',
        'Client collaboration',
      ],
      initialX: 400,
      initialY: 50,
      color: 'border-pink-500',
    },
    {
      id: 'skills',
      title: 'Skills',
      content: [
        'Branding & Identity',
        'Media Design',
        'Merchandise Design',
        'Adobe Creative Suite',
        'Figma & Sketch',
      ],
      initialX: 750,
      initialY: 50,
      color: 'border-cyan-400',
    },
    {
      id: 'projects',
      title: 'Notable Projects',
      content: [
        'Tech Startup Branding',
        'Corporate Visual Identity',
        'Streetwear Merchandise Line',
        'Social Media Campaign',
      ],
      initialX: 50,
      initialY: 350,
      color: 'border-pink-500',
    },
    {
      id: 'education',
      title: 'Education',
      content: [
        'Graphic Design Degree',
        'Visual Communication',
        'Digital Media Studies',
      ],
      initialX: 400,
      initialY: 350,
      color: 'border-cyan-400',
    },
    {
      id: 'philosophy',
      title: 'Design Philosophy',
      content: [
        'Only think, then execute.',
        'Minimalism with purpose',
        'Pixel-perfect precision',
        'User-centered approach',
      ],
      initialX: 750,
      initialY: 350,
      color: 'border-pink-500',
    },
  ];

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-black z-50 overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-white/10 px-4 py-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60">Resume.psd</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Resume Content */}
        <div className="p-4 space-y-4 pb-20">
          {cvElements.map((element) => (
            <StaticCard
              key={element.id}
              title={element.title}
              content={element.content}
              color={element.color}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="fixed inset-0 bg-black z-50 overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/60">Resume.psd</span>
            <div className="h-px w-12 bg-cyan-400/50"></div>
            <span className="text-xs text-white/40">Drag elements to rearrange</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Canvas Grid Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        >
          {/* Draggable CV Elements */}
          <div className="relative w-full h-full pt-20">
            {cvElements.map((element) => (
              <DraggableCard
                key={element.id}
                id={element.id}
                title={element.title}
                content={element.content}
                initialX={element.initialX}
                initialY={element.initialY}
                color={element.color}
              />
            ))}
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40">Interactive Canvas</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
                <span className="text-xs text-white/40">Live</span>
              </div>
            </div>
            <span className="text-xs text-white/40">Press ESC to close</span>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
