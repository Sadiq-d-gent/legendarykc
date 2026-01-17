import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProofItem {
  id: number;
  image: string;
  label: string;
  description: string;
  platform: string;
  expandedContext: string;
}

interface ContentItem {
  id: number;
  title: string;
  description: string;
  link: string;
  platform: string;
}

interface ContributionItem {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const proofItems: ProofItem[] = [
  {
    id: 1,
    image: "pow1.jpeg",
    label: "Community Growth",
    description:
      "Grew this community in one week through strategic engagement and retention campaigns.",
    platform: "X (Twitter)",
    expandedContext:
      "Implemented structured growth systems that prioritized quality interactions over vanity metrics, resulting in sustained daily engagement across multiple time zones.",
  },
  {
    id: 2,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 3,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 4,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 5,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 6,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 7,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 8,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 9,
    image: "pow3.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
  {
    id: 10,
    image: "pow10.jpeg",
    label: "Raid Coordination",
    description:
      "Led coordinated raids and content campaigns that increased active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Organized and executed high-impact raid campaigns with precise timing and coordination, driving measurable engagement spikes and community visibility.",
  },
];

const contentItems: ContentItem[] = [
  {
    id: 1,
    title: "An Ultimate Guide Towards Twitter Monetization",
    description: "A detailed thread breaking down systems used to monetize X.",
    link: "https://x.com/",
    platform: "X Thread",
  },
  {
    id: 2,
    title: "Take Ideas From Concept to Creation",
    description:
      "Structured frameworks for turning raw ideas into execution-ready projects.",
    link: "https://x.com/",
    platform: "Article",
  },
  {
    id: 3,
    title: "How SIGN Did It",
    description:
      "Deep dive into the systems behind building a strong Web3 community.",
    link: "https://x.com/",
    platform: "Article",
  },
];

const contributionItems: ContributionItem[] = [
  {
    id: 1,
    name: "IDEEZA",
    logo: "ideeza.jpeg",
    description:
      "Content marketer, writing high-signal articles to drive awareness and engagement.",
  },
  {
    id: 2,
    name: "SIGN",
    logo: "sign.jpeg",
    description:
      "Verified creator contributing to structured growth and community engagement.",
  },
];

const ProofOfWorkSection = () => {
  const [selectedItem, setSelectedItem] = useState<ProofItem | null>(null);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <section id="proof" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Real campaigns. Real traction. Real communities.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proof of Work
          </h2>
        </div>

        {/* === VISUAL PROOF GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {proofItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setShowDescription(true);
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-card/40 border border-border/30 shadow-lg shadow-black/5 transition-all hover:border-primary/30">
                {/* Fixed ratio BEFORE click */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>

                <div className="p-5">
                  <h4 className="text-foreground font-semibold mb-2">
                    {item.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex justify-between text-xs">
                    <span className="text-muted-foreground/60">
                      {item.platform}
                    </span>
                    <span className="text-primary font-medium">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === ARTICLES === */}
        <div className="mb-28">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Articles & Threads
          </h3>

          <div className="space-y-6">
            {contentItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-border/30 p-6 shadow-md shadow-black/5 hover:border-primary/30 transition"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <span className="text-xs font-medium text-primary">
                  {item.platform} →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* === CONTRIBUTIONS === */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Contributions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributionItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 items-start rounded-xl border border-border/30 p-6 shadow-md shadow-black/5"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-12 h-12 rounded-md object-contain bg-background"
                />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === FULL VIEW MODAL === */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-none w-screen h-screen bg-background border-none p-0">
          {selectedItem && (
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={() => setShowDescription((prev) => !prev)}
            >
              {/* Full image — no ratio, no size restriction */}
              <img
                src={selectedItem.image}
                alt={selectedItem.label}
                className="max-w-full max-h-full object-contain"
              />

              {/* Optional description overlay */}
              {showDescription && (
                <div className="absolute bottom-0 w-full backdrop-blur-md bg-background/60 p-6">
                  <h4 className="text-sm uppercase tracking-wider text-primary mb-2">
                    {selectedItem.label}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {selectedItem.expandedContext}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProofOfWorkSection;
