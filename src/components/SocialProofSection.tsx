import { Twitter, Mic2, Users } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Quote block */}
          <blockquote 
            className="text-center mb-16"
            data-aos="zoom-in"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground italic leading-relaxed">
              "Strong communities are built with{" "}
              <span className="text-primary font-medium not-italic">structure</span>, not noise."
            </p>
          </blockquote>
          
          {/* Social stats */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div 
              className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Twitter className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">X (Twitter)</div>
                <div className="text-foreground font-medium">@LegendaryKC</div>
              </div>
            </div>
            
            <div 
              className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Mic2 className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Role</div>
                <div className="text-foreground font-medium">Space Host</div>
              </div>
            </div>
            
            <div 
              className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Users className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Experience</div>
                <div className="text-foreground font-medium">Project Advisor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
