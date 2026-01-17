const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="heading-lg text-foreground mb-12 text-center lg:text-left"
            data-aos="fade-up"
          >
            About <span className="text-gradient">Legendary KC</span>
          </h2>
          
          <div className="space-y-6 body-lg">
            <p data-aos="fade-up" data-aos-delay="100">
              I am vastly experienced in growing and moderating Web3 communities across platforms including Telegram, Discord, and WhatsApp.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="200">
              I lead <span className="text-primary font-medium">MagnetX Community</span>, a highly active ecosystem of skilled individuals focused on growth, collaboration, and real traction.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="300">
              I have held lead roles in raids, hype coordination, content creation, and thread contests, driving measurable growth for multiple Web3 projects.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="400">
              My focus is not on inflated numbers, but on building engaged, retained, and value-driven communities.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="500">
              I am genuinely passionate about community building and excited to bring structure, energy, and systems into new Web3 ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
