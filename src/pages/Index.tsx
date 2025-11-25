import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import heroMain from "@/assets/hero-main.jpg";
import beachScene from "@/assets/beach-scene.jpg";
import costumeDetail from "@/assets/costume-detail.jpg";
import { Calendar, MapPin, Music2, Sparkles, Users, Waves } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl font-black text-foreground">
            CARIBÉ<span className="text-primary">FEST</span>
          </h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#lineup" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Lineup
            </a>
            <a href="#venue" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Venue
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-premium">
              Get Tickets
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${heroMain})` }}
          >
            <div className="absolute inset-0 bg-gradient-dark" />
          </div>
        </ParallaxSection>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-slow">
            <p className="text-sm md:text-base font-semibold text-gold mb-4 tracking-[0.3em] uppercase">
              June 15-18, 2025
            </p>
            <h1 className="font-display text-7xl md:text-9xl font-black text-white mb-6 leading-none tracking-tight">
              CARIBÉ<span className="text-transparent bg-clip-text bg-gradient-premium">FEST</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Where the spirit of the Caribbean comes alive in a symphony of color, rhythm, and culture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-premium text-white px-10 py-7 text-lg font-semibold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-105 border-0"
              >
                Reserve Your Experience
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-foreground px-10 py-7 text-lg font-semibold transition-all duration-500 hover:scale-105"
              >
                Explore the Journey
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium tracking-wider">SCROLL TO DISCOVER</span>
            <Waves className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Festival Attendees", icon: Users },
              { number: "100+", label: "International Artists", icon: Music2 },
              { number: "4", label: "Days of Celebration", icon: Calendar },
              { number: "10+", label: "Caribbean Islands", icon: MapPin }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="font-display text-5xl md:text-6xl font-black text-foreground mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                  About the Festival
                </p>
                <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                  A Celebration of Caribbean Heritage
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  CariféFest is more than a festival—it's an immersive journey into the heart of Caribbean culture. 
                  For four extraordinary days, we bring together the vibrant traditions, infectious rhythms, and 
                  stunning artistry of the Caribbean islands.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  From the pulsating beats of soca and reggae to the spectacular visual feast of traditional mas, 
                  every moment is designed to transport you to paradise and celebrate the rich cultural tapestry 
                  that makes the Caribbean unique.
                </p>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500">
                  Learn Our Story
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
                  <img 
                    src={costumeDetail} 
                    alt="Caribbean festival costume detail" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-premium rounded-full blur-3xl opacity-20" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-sm font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                The Experience
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6">
                Immerse Yourself in Paradise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every element of CariféFest is crafted to create unforgettable moments
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music2,
                title: "Live Performances",
                description: "World-class artists performing authentic Caribbean music from soca and calypso to reggae and dancehall.",
                gradient: "from-primary to-ocean-light"
              },
              {
                icon: Sparkles,
                title: "Carnival Mas",
                description: "Experience the artistry of traditional masquerade with elaborate costumes and spectacular choreography.",
                gradient: "from-coral to-gold"
              },
              {
                icon: Users,
                title: "Cultural Workshops",
                description: "Learn traditional dance, music, and crafts from master artists and cultural ambassadors.",
                gradient: "from-forest to-primary"
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="group p-8 bg-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-border overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <feature.icon className="w-14 h-14 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ParallaxSection speed={0.5} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${beachScene})` }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
        </ParallaxSection>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <ScrollReveal>
            <div className="text-center max-w-4xl">
              <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Feel the Rhythm of the Islands
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Where every beat tells a story and every color celebrates life
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lineup Preview */}
      <section id="lineup" className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-sm font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                Featured Artists
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6">
                The Lineup
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Legendary performers and rising stars from across the Caribbean
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Machel Montano", "Shaggy", "Buju Banton", "Nadia Batson", "Busy Signal", "Patrice Roberts", "Konshens", "Destra Garcia"].map((artist, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <Card className="group relative overflow-hidden bg-card border-border hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
                    <Music2 className="w-16 h-16 text-primary/40 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {artist}
                    </h3>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-32 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-premium">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-coral/30 flex items-center justify-center">
                    <MapPin className="w-24 h-24 text-primary/40" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="text-sm font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                  The Venue
                </p>
                <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                  Paradise Shores Festival Grounds
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Set against the stunning backdrop of crystal-clear Caribbean waters and golden sand beaches, 
                  our world-class venue features multiple stages, immersive art installations, and authentic 
                  island cuisine from renowned Caribbean chefs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Sunset Bay, Trinidad & Tobago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Dates</p>
                      <p className="text-muted-foreground">June 15-18, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Your Journey Awaits
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 font-light max-w-3xl mx-auto">
              Secure your place at the most anticipated Caribbean celebration of the year
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-foreground hover:bg-white/95 px-12 py-7 text-lg font-bold shadow-glow transition-all duration-500 hover:scale-105"
              >
                Purchase Tickets
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground px-12 py-7 text-lg font-bold transition-all duration-500 hover:scale-105"
              >
                VIP Packages
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-display text-2xl font-black mb-4">
                CARIBÉ<span className="text-primary">FEST</span>
              </h3>
              <p className="text-background/70 text-sm">
                Experience the rhythm of paradise
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Festival</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-background transition-colors">Experience</a></li>
                <li><a href="#lineup" className="hover:text-background transition-colors">Lineup</a></li>
                <li><a href="#venue" className="hover:text-background transition-colors">Venue</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Travel Guide</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Accommodation</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-background transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8">
            <p className="text-center text-sm text-background/70">
              © 2025 CariféFest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
