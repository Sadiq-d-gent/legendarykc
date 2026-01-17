import { MessageCircle, Users2, Zap } from "lucide-react";

const stats = [
  { label: "Active Members", value: "500+", icon: Users2 },
  { label: "Projects Supported", value: "25+", icon: Zap },
  { label: "Platforms", value: "3", icon: MessageCircle },
];

const platforms = ["Telegram", "Discord", "WhatsApp"];

const MagnetXSection = () => {
  return (
    <section id="magnetx" className="py-24 lg:py-32">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="heading-lg text-foreground mb-4"
              data-aos="fade-up"
            >
              <span className="text-gradient">MagnetX</span> Community
            </h2>
            <p 
              className="body-lg max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A highly active ecosystem of skilled individuals focused on growth, collaboration, and real traction.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-lg border border-border text-center group hover:border-primary/30 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Platforms */}
          <div 
            className="flex flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {platforms.map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground border border-border"
              >
                {platform}
              </span>
            ))}
          </div>
          
          {/* Emphasis */}
          <p 
            className="mt-12 text-center body-md max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Real traction. Active participation. Skilled members driving measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagnetXSection;
