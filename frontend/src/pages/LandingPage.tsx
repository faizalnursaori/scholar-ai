import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Search, Clipboard, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="space-y-5">
      <Navbar />
      <div className="hero bg-base-200 rounded-xl p-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">ScholarAI</h1>
            <p className="py-6">
              Your AI-powered scholarship assistant for Indonesian students. Discover scholarships,
              generate application documents, and track deadlines, all in one place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/scholarships" className="btn btn-primary">
                Find Scholarships
              </Link>
              <Link to="/ai-assistant" className="btn btn-secondary">
                Use AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">
                <Clipboard />
                AI Document Assistant
              </h3>
              <p>
                Generate personalized motivation letters and CVs tailored to your profile and
                scholarship requirements.
              </p>
              <div className="card-actions justify-end">
                <Link to="/ai-assistant" className="btn btn-primary btn-sm">
                  Try Now
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">
                <Search />
                Semantic Search
              </h3>
              <p>
                Search for scholarships using natural language. Simply describe what you're looking
                for.
              </p>
              <div className="card-actions justify-end">
                <Link to="/scholarships" className="btn btn-primary btn-sm">
                  Search Now
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">
                <Clock />
                Deadline Reminders
              </h3>
              <p>Never miss a scholarship application deadline with our email reminder system.</p>
              <div className="card-actions justify-end">
                <Link to="/reminders" className="btn btn-primary btn-sm">
                  Set Reminders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="bg-primary text-white rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect scholarship?</h2>
          <p className="mb-6">
            Create your profile today and let ScholarAI match you with the best opportunities.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
