import { CheckCircle } from "lucide-react";

const VerifiedBadge = () => {
  return (
    <span className="inline-flex items-center gap-1 text-primary">
      <CheckCircle className="h-5 w-5 fill-primary stroke-background" />
    </span>
  );
};

export default VerifiedBadge;
