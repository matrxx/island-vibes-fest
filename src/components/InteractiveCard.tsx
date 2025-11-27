import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export const InteractiveCard = ({ children, className = "" }: InteractiveCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective">
      <Card
        className={`transition-all duration-300 ease-out ${className}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Card>
    </div>
  );
};
