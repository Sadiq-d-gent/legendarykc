const projects = [
  { name: "Magic Square", role: "KOL", logo: "sq.jpeg" },
  { name: "IDEEZA", role: "Content Marketer", logo: "ideeza.jpeg" },
  { name: "Sign", role: "Verified Creator", logo: "sign.jpeg" },
  // { name: "GameFi Studio", role: "Community Manager", logo: null },
  // { name: "Web3 Social Platform", role: "Ambassador Lead", logo: null },
  // { name: "Token Launch Project", role: "Hype Strategist", logo: null },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <h2
          className="heading-lg text-foreground mb-4 text-center"
          data-aos="fade-up"
        >
          Projects & Collaborations
        </h2>
        <p
          className="body-lg text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A track record of driving growth across diverse Web3 ecosystems
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:glow-primary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={150 + index * 75}
            >
              <div className="flex items-center gap-4">
                {/* Logo / Placeholder */}
                <div className="w-12 h-12 rounded-md bg-muted/40 border border-border flex items-center justify-center overflow-hidden">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Logo
                    </span>
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-foreground font-medium leading-tight group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
