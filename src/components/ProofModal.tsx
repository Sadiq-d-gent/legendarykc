import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProofItem } from "./ProofOfWork";

interface ProofModalProps {
  proof: ProofItem;
  allProofs: ProofItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

const ProofModal = ({
  proof,
  currentIndex,
  onClose,
  onNavigate,
}: ProofModalProps) => {
  const [showDescription, setShowDescription] = useState(true);
  const [scale, setScale] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      onNavigate(diff > 0 ? "next" : "prev");
    }
    setTouchStart(null);
  };

  // Pinch zoom (simplified)
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      setScale((prev) => Math.min(3, Math.max(1, prev - e.deltaY * 0.01)));
    }
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-11 right-4 z-50 p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation arrows - Desktop */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("prev");
          }}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-300"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("next");
          }}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-300"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Main content */}
        <div
          className="w-full h-full flex items-center justify-center p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <motion.div
            key={proof.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl"
          >
            {/* Image */}
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={toggleDescription}
            >
              <img
                src={proof.image}
                alt={proof.title}
                className="w-full h-auto object-contain transition-transform duration-300"
                style={{ transform: `scale(${scale})` }}
              />

              {/* Description overlay */}
              <AnimatePresence>
                {showDescription && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 glass-panel p-6"
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {proof.title}
                    </h3>
                    <p className="text-sm text-primary mb-2">{proof.role}</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {proof.description}
                    </p>
                    <div className="mt-3">
                      <span className="text-xs text-muted-foreground px-2 py-1 bg-muted/50 rounded">
                        {proof.platform}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hints */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50">
              <span className="hidden md:inline">Swipe • Esc</span>
              <span className="md:hidden">Tap to toggle details</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("prev");
            }}
            className="p-3 bg-card border border-border rounded-full text-muted-foreground"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {6}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("next");
            }}
            className="p-3 bg-card border border-border rounded-full text-muted-foreground"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cancel button for mobile */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 left-4 px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground"
        >
          Cancel
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProofModal;
