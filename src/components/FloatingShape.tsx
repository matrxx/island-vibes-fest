interface FloatingShapeProps {
  className?: string;
  delay?: number;
}

export const FloatingShape = ({ className = "", delay = 0 }: FloatingShapeProps) => {
  return (
    <div
      className={`absolute bg-gradient-animated animate-morph opacity-20 blur-2xl ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
};
