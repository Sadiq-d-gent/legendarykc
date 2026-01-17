import { Button } from "@/components/ui/button";
import VerifiedBadge from "@/components/VerifiedBadge";
import ParticlesBackground from "@/components/ParticlesBackground";
import profileImage from "@/assets/profile-legendary-kc.jpg";

const HeroSection = () => {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Ambient noise background */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h1 className="heading-xl text-foreground">
                  Legendary KC
                </h1>
                <VerifiedBadge />
              </div>
              
              <p className="heading-md text-muted-foreground font-normal">
                Web3 Community Builder & Growth Strategist
              </p>
              
              <p className="body-lg max-w-lg mx-auto lg:mx-0">
                Building real communities — not inflated numbers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => handleScrollTo("#contact")}
                >
                  Work With Me
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  onClick={() => handleScrollTo("#projects")}
                >
                  View Communities & Projects
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative" data-aos="fade-up" data-aos-delay="400">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-glow-pulse" />
              
              {/* Profile image with breathing animation */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 animate-breathe">
                <img
                  src= "legend.jpeg"
                  alt="Legendary KC - Web3 Community Builder"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-110" />
              <div className="absolute inset-0 rounded-full border border-primary/5 scale-125" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2" data-aos="fade-in" data-aos-delay="1000">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
