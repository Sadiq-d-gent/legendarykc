import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProofModal from "./ProofModal";
import proof1 from "@/assets/proof-1.jpg";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";
import proof4 from "@/assets/proof-4.jpg";
import proof5 from "@/assets/proof-5.jpg";
import proof6 from "@/assets/proof-6.jpg";

export interface ProofItem {
  id: number;
  image: string;
  title: string;
  role: string;
  description: string;
  platform: string;
}

const proofItems: ProofItem[] = [
  {
    id: 1,
    image: "pow1.jpeg",
    title: "community scaling campaign",
    role: "Community Lead & Growth Strategist",
    description: "Scaled community from 2K to 85K+ members through strategic KOL activations and targeted content campaigns. Achieved 1,000% engagement increase within 90 days through data-driven community programs.",
    platform: "Discord · Twitter",
  },
  {
    id: 2,
    image: "pow3.jpeg",
    title: "DM Pow",
    role: "Event & Brand Manager",
    description: "",
    platform: "X (Twitter)",
  },
  {
    id: 3,
    image: "pow4.jpeg",
    title: "DM pow",
    role: "Ecosystem Architect",
    description: "Built and managed a 50K+ member gaming community with structured roles, rewards systems, and active engagement protocols. Created sustainable growth loops that maintained 40% weekly active rate.",
    platform: "Discord · Telegram",
  },
  {
    id: 4,
    image: "pow5.jpeg",
    title: "DM Pow",
    role: "Content Strategist",
    description: "Developed and executed viral content strategy achieving 750K+ impressions across multiple threads. Built systematic approach to thought leadership that increased follower base by 300% organically.",
    platform: "X (Twitter)",
  },
  {
    id: 5,
    image: "pow6.jpeg",
    title: "DM Pow",
    role: "Marketing Lead",
    description: "Led marketing strategy for 10K PFP collection achieving mint-out within 4 hours. Coordinated 25+ KOL partnerships and community-driven whitelist campaigns with zero paid advertising.",
    platform: "OpenSea · Magic Eden",
  },
  {
    id: 6,
    image: "pow7.jpeg",
    title: "Protocol Partnership Development",
    role: "BD & Strategic Advisor",
    description: "Facilitated strategic partnerships between emerging protocols and established players. Closed 8 integration deals resulting in combined ecosystem value of $15M+ and cross-community growth.",
    platform: "Multi-Chain",
  },
];

const ProofOfWork = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, proofItems.length));
  };

  const openModal = (proof: ProofItem, index: number) => {
    setSelectedProof(proof);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedProof(null);
  };

  const navigateProof = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (selectedIndex - 1 + proofItems.length) % proofItems.length
        : (selectedIndex + 1) % proofItems.length;
    setSelectedIndex(newIndex);
    setSelectedProof(proofItems[newIndex]);
  };

  return (
    <section id="proof" className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 data-aos="fade-up" className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Proof of Work
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-base md:text-lg">
            Real campaigns. Real traction. Real communities.
          </p>
        </motion.div>

        {/* Proof Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {proofItems.slice(0, visibleCount).map((proof, index) => (
            <motion.div
              key={proof.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden card-hover">
                {/* Image */}
                <div className="aspect-video-16-9 overflow-hidden">
                  <img
                    src={proof.image}
                    alt={proof.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {proof.title}
                  </h3>
                  <p className="text-sm text-primary mb-2">{proof.role}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {proof.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/70 px-2 py-1 bg-muted rounded">
                      {proof.platform}
                    </span>
                    <button
                      onClick={() => openModal(proof, index)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      View details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < proofItems.length && (
          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <button
              onClick={loadMore}
              className="px-6 py-3 text-sm text-muted-foreground border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              Load more
            </button>
          </div>
        )}

        {/* Reference Link */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center pt-8 border-t border-border-subtle"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Community-led marketing execution
          </p>
          <p className="text-xs text-muted-foreground/70">
            A campaign executed by my community and I —{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1bf9-us5hsTYHydotbBZyrmQKKPrKU-RcauO5mj6CVQM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 underline underline-offset-2"
            >
              View evidence
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProof && (
        <ProofModal
          proof={selectedProof}
          allProofs={proofItems}
          currentIndex={selectedIndex}
          onClose={closeModal}
          onNavigate={navigateProof}
        />
      )}
    </section>
  );
};

export default ProofOfWork;
