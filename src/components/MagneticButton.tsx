import { ReactNode, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export const MagneticButton = ({ 
  children, 
  className = "", 
  onClick,
  variant = "default",
  size = "default"
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`cursor-magnetic transition-transform duration-200 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
