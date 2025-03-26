import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Brain, 
  Lightbulb
} from "lucide-react";

const icons = [
  { Icon: BookOpen, color: "#4F46E5" },    // Indigo
  { Icon: GraduationCap, color: "#7C3AED" }, // Purple
  { Icon: Brain, color: "#059669" },       // Emerald
  { Icon: Lightbulb, color: "#D97706" },   // Amber
];

const positions = [
  { top: "20%", left: "10%", z: 1 },  // Top-left
  { top: "20%", right: "10%", z: 1 }, // Top-right
  { bottom: "20%", left: "10%", z: 1 }, // Bottom-left
  { bottom: "20%", right: "10%", z: 1 }, // Bottom-right
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            ...positions[index],
            transform: `translateZ(${positions[index].z * 20}px) scale(${1 + positions[index].z * 0.1})`,
          }}
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 15, -15, 0],
            rotateY: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <Icon 
            className="w-12 h-12" 
            style={{
              color: color,
              filter: `
                drop-shadow(0 0 8px ${color}40)
                drop-shadow(0 0 16px ${color}40)
                drop-shadow(0 0 24px ${color}40)
                drop-shadow(0 4px 8px ${color}40)
                drop-shadow(0 8px 16px ${color}40)
              `,
              transform: 'translateZ(20px)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
} 