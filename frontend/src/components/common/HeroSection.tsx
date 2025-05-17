import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="hero bg-base-200 rounded-xl p-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">ScholarAI</h1>
          <p className="py-6">
            Your AI-powered scholarship assistant for Indonesian students. Discover scholarships,
            generate application documents, and track deadlines, all in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/scholarships" className="btn btn-primary rounded-md">
              Find Scholarships
            </Link>
            <Link to="/ai-assistant" className="btn btn-secondary rounded-md">
              Use AI Assistant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
