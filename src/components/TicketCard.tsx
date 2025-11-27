import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveCard } from "./InteractiveCard";

interface TicketCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  onSelect: () => void;
}

export const TicketCard = ({ name, price, description, features, popular, onSelect }: TicketCardProps) => {
  return (
    <InteractiveCard className={cn(
      "group relative p-8 border-2 bg-card transition-all duration-300 hover:shadow-hover",
      popular ? "border-primary shadow-premium scale-[1.02]" : "border-border"
    )}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-premium text-white px-4 py-1 rounded-full text-sm font-bold shadow-soft">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg" />
      
      <div className="text-center mb-6 relative z-10">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
            ${price}
          </span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">/person</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8 relative z-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 group/item">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-all duration-300" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={onSelect}
        className={cn(
          "relative w-full overflow-hidden py-6 text-lg font-semibold transition-all duration-300 group/button z-10",
          popular 
            ? "bg-gradient-premium text-white hover:shadow-hover" 
            : "bg-primary text-white hover:bg-primary/90"
        )}
      >
        <span className="relative z-10">Select {name}</span>
      </Button>
    </InteractiveCard>
  );
};
