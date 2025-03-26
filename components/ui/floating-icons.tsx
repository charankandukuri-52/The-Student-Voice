import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Brain, 
  Lightbulb, 
  Target, 
  Trophy, 
  Users, 
  Heart, 
  Star, 
  Award 
} from "lucide-react";

const icons = [
  { Icon: BookOpen, color: "text-blue-500" },
  { Icon: GraduationCap, color: "text-purple-500" },
  { Icon: Brain, color: "text-green-500" },
  { Icon: Lightbulb, color: "text-yellow-500" },
  { Icon: Target, color: "text-red-500" },
  { Icon: Trophy, color: "text-orange-500" },
  { Icon: Users, color: "text-pink-500" },
  { Icon: Heart, color: "text-rose-500" },
  { Icon: Star, color: "text-amber-500" },
  { Icon: Award, color: "text-indigo-500" },
];

const positions = [
  { top: "10%", left: "5%" },
  { top: "20%", right: "10%" },
  { top: "40%", left: "15%" },
  { top: "60%", right: "20%" },
  { top: "80%", left: "10%" },
  { top: "30%", right: "15%" },
  { top: "50%", left: "20%" },
  { top: "70%", right: "10%" },
  { top: "90%", left: "15%" },
  { top: "25%", right: "25%" },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={positions[index]}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <Icon className="w-8 h-8 opacity-50" />
        </motion.div>
      ))}
    </div>
  );
} 