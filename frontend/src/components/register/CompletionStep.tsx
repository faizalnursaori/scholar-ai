import { Link } from "react-router-dom";

const CompletionStep: React.FC = () => {
  return (
    <div className="text-center py-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">Registration Complete!</h3>
      <p className="mb-4 text-sm">
        Your ScholarAI account has been created successfully. We'll help you find scholarships
        matching your profile and assist with application documents.
      </p>

      <div className="flex flex-col gap-3">
        <Link to="/scholarships" className="btn btn-primary">
          Find Scholarships
        </Link>
        <Link to="/ai-assistant" className="btn btn-secondary">
          Use AI Document Assistant
        </Link>
        <Link to="/login" className="btn btn-outline">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default CompletionStep;
