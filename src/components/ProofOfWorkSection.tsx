import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

/* ---------------- DATA ---------------- */

const proofItems: ProofItem[] = [
  {
    id: 1,
    image: "pow1.jpeg",
    label: "Community grow",
    description:
      "Scaled an early-stage Web3 community from inactive to daily engagement within one week.",
    platform: "X (Twitter)",
    expandedContext:
      "Designed and executed a rapid growth sprint focused on daily prompts, incentive-driven replies, and timezone-based engagement cycles. Resulted in consistent organic conversations and higher retention.",
  },
  {
    id: 2,
    image: "pow2.jpeg",
    label: "POW",
    description:
      "Desc.",
    platform: "X (Twitter)",
    expandedContext:
      "Desc.",
  },
  {
    id: 3,
    image: "pow3.jpeg",
    label: "POW",
    description:
      "Desc.",
    platform: "X (Twitter)",
    expandedContext:
      "Desc.",
  },
  {
    id: 4,
    image: "pow4.jpeg",
    label: "POW",
    description:
      "Desc.",
    platform: "X (Twitter)",
    expandedContext:
      "Desc.",
  },
  {
    id: 5,
    image: "pow5.jpeg",
    label: "Retention & Reactivation",
    description:
      "Reactivated dormant members through targeted interaction strategies.",
    platform: "X (Twitter)",
    expandedContext:
      "Identified inactive participants and reintroduced them through direct prompts, themed discussions, and spotlight features, improving overall community stickiness.",
  },
  {
    id: 6,
    image: "pow6.jpeg",
    label: "Campaign Performance Tracking",
    description:
      "Tracked and optimized campaign performance across multiple pushes.",
    platform: "X (Twitter)",
    expandedContext:
      "Monitored engagement metrics across raids and posts, iterating on timing, phrasing, and call-to-actions to steadily improve campaign outcomes.",
  },
  {
    id: 7,
    image: "pow7.jpeg",
    label: "Launch Support Operations",
    description:
      "Supported project launch with coordinated visibility efforts.",
    platform: "X (Twitter)",
    expandedContext:
      "Handled pre-launch hype, launch-day raids, and post-launch engagement to maintain momentum and ensure consistent visibility during critical phases.",
  },
  {
    id: 8,
    image: "pow8.jpeg",
    label: "Contributor Onboarding",
    description:
      "Onboarded and aligned new contributors into active participation.",
    platform: "X (Twitter)",
    expandedContext:
      "Introduced onboarding flows that quickly educated new members on engagement standards, tone, and expectations, shortening the time from join to contribution.",
  },
  {
    id: 9,
    image: "pow9.jpeg",
    label: "Narrative Alignment",
    description:
      "Aligned community messaging with project narrative and goals.",
    platform: "X (Twitter)",
    expandedContext:
      "Ensured community-driven content reinforced the project’s core narrative, preventing mixed messaging and strengthening brand consistency across campaigns.",
  },
  {
    id: 10,
    image: "pow10.jpeg",
    label: "Sustained Growth Systems",
    description:
      "Built repeatable systems for long-term community growth.",
    platform: "X (Twitter)",
    expandedContext:
      "Transitioned short-term tactics into sustainable systems that allowed communities to maintain engagement without constant manual intervention.",
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

/* ---------------- COMPONENT ---------------- */

const ProofOfWorkSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showDescription, setShowDescription] = useState(true);

  const activeItem =
    activeIndex !== null ? proofItems[activeIndex] : null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((i) =>
          i! < proofItems.length - 1 ? i! + 1 : i
        );
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex((i) => (i! > 0 ? i! - 1 : i));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex]);

  return (
    <section id="proof" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Real campaigns. Real traction. Real communities.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proof of Work
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {proofItems.slice(0, visibleCount).map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveIndex(index);
                setShowDescription(true);
              }}
              className="group cursor-pointer rounded-xl border border-border/30 bg-card/40 shadow-md hover:shadow-lg hover:border-primary/30 transition"
            >
              <div className="aspect-[16/9] max-h-44 overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-1">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <span className="text-xs text-primary font-medium mt-3 inline-block">
                  View details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < proofItems.length && (
          <div className="text-center mb-28">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="px-8 py-3 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition"
            >
              Load more work
            </button>
          </div>
        )}

        {/* ARTICLES */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border/60" />
            <h3 className="text-xl font-semibold tracking-wide">
              Articles & Threads
            </h3>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contentItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                className="group rounded-xl border border-border/30 bg-card/40 p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition"
              >
                <span className="text-xs uppercase tracking-wider text-primary/70">
                  {item.platform}
                </span>
                <h4 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* CONTRIBUTIONS */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border/60" />
            <h3 className="text-xl font-semibold tracking-wide">
              Contributions
            </h3>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contributionItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-start rounded-xl border border-border/30 bg-card/40 p-6 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.logo}
                  className="w-12 h-12 object-contain rounded-md bg-background"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULL VIEW */}
      <Dialog open={!!activeItem} onOpenChange={() => setActiveIndex(null)}>
        <DialogContent className="w-screen h-screen p-0 bg-background border-none">
          {activeItem && (
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={() => setShowDescription((s) => !s)}
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 z-50 px-3 py-1 rounded-md bg-background/80 border text-sm"
              >
                Close
              </button>

              <img
                src={activeItem.image}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute top-4 left-4 text-xs text-muted-foreground">
                Tap image • Swipe • Esc
              </div>

              <div
                className={`absolute bottom-0 w-full backdrop-blur-md bg-background/60 p-6 transition-opacity duration-300 ${
                  showDescription ? "opacity-100" : "opacity-0"
                }`}
              >
                <h4 className="text-sm uppercase tracking-wider text-primary mb-2">
                  {activeItem.label}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeItem.expandedContext}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProofOfWorkSection;
