import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

interface TicketModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticketType: {
    name: string;
    price: number;
  } | null;
}

export const TicketModal = ({ open, onOpenChange, ticketType }: TicketModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tickets reserved successfully!", {
      description: `${quantity} x ${ticketType?.name} ticket(s) reserved. Check your email for confirmation.`,
    });
    onOpenChange(false);
    setQuantity(1);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  const total = (ticketType?.price || 0) * quantity;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-black">
            Reserve Your Tickets
          </DialogTitle>
          <DialogDescription>
            Complete your booking for {ticketType?.name} tickets
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Ticket Selection */}
          <div className="bg-muted/50 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-foreground">{ticketType?.name}</h3>
                <p className="text-muted-foreground">${ticketType?.price} per ticket</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">Total:</span>
                <span className="text-3xl font-black text-foreground">${total}</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Your Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-premium text-white hover:shadow-glow"
            >
              Complete Reservation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
