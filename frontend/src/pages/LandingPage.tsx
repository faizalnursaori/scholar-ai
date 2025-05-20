import { Search, Clipboard, Clock } from "lucide-react";
import CallToActionSection from "../components/common/CallToAction";
import FeatureCard from "../components/common/FeatureSection";
import HeroSection from "../components/common/HeroSection";

export default function LandingPage() {
  return (
    <div className="space-y-5">
      <HeroSection />

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="AI Document Assistant"
            description="Generate personalized motivation letters and CVs tailored to your profile and scholarship requirements."
            icon={Clipboard}
            link="/ai-assistant"
            buttonText="Try Now"
          />
          <FeatureCard
            title="Semantic Search"
            description="Search for scholarships using natural language. Simply describe what you're looking for."
            icon={Search}
            link="/scholarships"
            buttonText="Search Now"
          />
          <FeatureCard
            title="Deadline Reminders"
            description="Never miss a scholarship application deadline with our email reminder system."
            icon={Clock}
            link="/reminders"
            buttonText="Set Reminders"
          />
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
}
