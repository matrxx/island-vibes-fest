import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-festival.jpg";
import { Music, Palmtree, Waves, PartyPopper } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl font-black text-white mb-6 animate-fade-in drop-shadow-2xl">
            Caribbean Festival
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-light animate-fade-in [animation-delay:200ms] drop-shadow-lg max-w-2xl mx-auto">
            Experience the rhythm, colors, and soul of paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-semibold shadow-tropical transition-all hover:scale-105"
            >
              Explore the Festival
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Waves className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Immerse Yourself in Paradise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A celebration of culture, music, and the vibrant spirit of the Caribbean islands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Music,
                title: "Rhythmic Beats",
                description: "Feel the pulse of authentic Caribbean music echoing through the streets",
                color: "text-primary"
              },
              {
                icon: Palmtree,
                title: "Tropical Vibes",
                description: "Immerse yourself in the lush, colorful atmosphere of island paradise",
                color: "text-tropical-green"
              },
              {
                icon: PartyPopper,
                title: "Cultural Celebration",
                description: "Experience traditions passed down through generations",
                color: "text-secondary"
              },
              {
                icon: Waves,
                title: "Ocean Energy",
                description: "Connect with the powerful spirit of Caribbean waters",
                color: "text-tropical-ocean"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-tropical transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-sunset relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float [animation-delay:2s]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
            Join the Celebration
          </h2>
          <p className="text-xl text-white/95 mb-8 font-light">
            Don't miss the most vibrant festival experience of the year
          </p>
          <Button 
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-glow transition-all hover:scale-105"
          >
            Get Your Tickets
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Caribbean Festival. Experience the rhythm of paradise.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
