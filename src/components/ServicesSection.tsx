import { Users, TrendingUp, Megaphone, FileText, Building2, UserCheck } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Web3 Community Management",
    description: "End-to-end community operations across multiple platforms",
  },
  {
    icon: TrendingUp,
    title: "Community Growth & Retention",
    description: "Sustainable growth strategies focused on real engagement",
  },
  {
    icon: Megaphone,
    title: "Raid & Hype Strategy",
    description: "Coordinated campaigns that create authentic momentum",
  },
  {
    icon: FileText,
    title: "Content & Thread Campaigns",
    description: "Strategic content that drives conversation and visibility",
  },
  {
    icon: Building2,
    title: "DAO & Ecosystem Structuring",
    description: "Building governance frameworks that scale",
  },
  {
    icon: UserCheck,
    title: "Creator & Ambassador Coordination",
    description: "Managing talent networks for maximum impact",
  },
];

const ServicesSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <h2 
          className="heading-lg text-foreground mb-4 text-center"
          data-aos="fade-up"
        >
          Expertise
        </h2>
        <p 
          className="body-lg text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Comprehensive Web3 community solutions built on proven experience
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card/80"
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="heading-md text-foreground mb-2">{service.title}</h3>
              <p className="body-md">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
