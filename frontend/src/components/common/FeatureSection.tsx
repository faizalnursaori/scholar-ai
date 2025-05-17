import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  buttonText: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  link,
  buttonText,
}: FeatureCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">
          <Icon />
          {title}
        </h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={link} className="btn btn-primary btn-sm rounded-md">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
