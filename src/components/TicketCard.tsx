import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <Card className={cn(
      "relative p-8 hover:shadow-premium transition-all duration-500 hover:-translate-y-2",
      popular && "border-2 border-primary shadow-premium"
    )}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-premium text-white px-6 py-2 rounded-full text-sm font-bold shadow-glow">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-black text-foreground">${price}</span>
          <span className="text-muted-foreground">/person</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={onSelect}
        className={cn(
          "w-full py-6 text-lg font-semibold transition-all duration-500",
          popular 
            ? "bg-gradient-premium text-white hover:shadow-glow" 
            : "bg-primary text-white hover:bg-primary/90"
        )}
      >
        Select {name}
      </Button>
    </Card>
  );
};
